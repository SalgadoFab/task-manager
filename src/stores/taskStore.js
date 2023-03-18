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

  },
  getters: {
    loadingStatus: state => state.loading,
    successStatus: state => state.success,
    errorStatus: state => state.error,
    tasks: state => state.tasks
  }
})

export default taskStore