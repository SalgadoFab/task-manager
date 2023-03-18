import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
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
    async createTask ({commit}, task) {
      commit('setSuccess', null)
      commit('setLoading', true)
      commit('setError', null)
      try {
        await fb.tasksCollection.add({
          name: task.name,
          description: task.description,
          category: task.category,
          assigneeId: task.assigneeId,
          expiration: task.expiration,
          created: getCurrentDate(),
          status: "on-hold"
        })
        commit('setLoading', false)
        commit('setSuccess', true)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error)
        commit('setSuccess', false)
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