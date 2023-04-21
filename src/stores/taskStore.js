import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import { format } from "date-fns";

Vue.use(Vuex)

const getCurrentDate = () => {
  const currentDate = new Date();
  return format(currentDate, "yyyy-MM-dd");
}

const taskStore = new Vuex.Store({
  // Estados
  state: {
    tasks: [],
    loading: false,
    success: null,
    error: null,
  },
  // Mutaciones
  mutations: {
    //Mutaciones para los estados
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    },
    setSuccess(state, success) {
      state.success = success
    }
  },
  // Acciones de interracion con base de datos
  actions: {
    async createTask({ commit }, task) {
      commit('setSuccess', null)
      commit('setLoading', true)
      commit('setError', null)
      try {
        await fb.tasksCollection.add({
          name: task.name,
          description: task.description,
          category: task.category,
          expiration: task.expiration,
          created: getCurrentDate(),
          assigneeId: task.assigneeId,
          assigneeName: task.assigneeName,
          status: "on-hold"
        })
        commit('setLoading', false)
        commit('setSuccess', true)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error)
        commit('setSuccess', false)
      }
    },
    async updateTask({commit}, task) {
      await fb.tasksCollection.doc(task.id).update({
        status: task.status,
      })
    },
    async getTasksByUser({ commit }) {
      commit('setSuccess', null);
      commit('setLoading', true);
      commit('setError', null);
      const userId = fb.auth.currentUser.uid
      try {
        const tasksSnapshot = await fb.tasksCollection
          .where('assigneeId', '==', userId)
          .orderBy('created', 'asc')
          .get();
        const tasks = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit('setTasks', tasks);
        commit('setLoading', false);
        commit('setSuccess', true);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error);
        commit('setSuccess', false);
      }
    },
    async getTasks({ commit }) {
      commit('setSuccess', null);
      commit('setLoading', true);
      commit('setError', null);
      try {
        const tasksSnapshot = await fb.tasksCollection
          .orderBy('created', 'asc')
          .get();
        const tasks = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit('setTasks', tasks);
        commit('setLoading', false);
        commit('setSuccess', true);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error);
        commit('setSuccess', false);
      }
    }
  },
  getters: {
    loadingStatus: state => state.loading,
    successStatus: state => state.success,
    errorStatus: state => state.error,
    tasks: state => state.tasks
  }
})

export default taskStore