import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  // Estados
  state: {
    currentUser: {},
    loading: false,
    success: null,
    error: null,
  },
  // Mutaciones
  mutations: {
    //Mutaciones para los estados
    setCurrentUser(state, user) {
      state.currentUser = user
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
    async fetchCurrentUser({ commit }, user) {
      // Obtiene la data del usuario logeado
      const currentUser = await fb.usersCollection.doc(user.uid).get()
      // Instancia el estado del logeado
      commit('setCurrentUser', currentUser.data())
      // Cambia la ruta al home del app
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async signup({ commit, dispatch }, form) {
      commit('setSuccess', null)
      commit('setLoading', true)
      commit('setError', null)
      try {
        const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
        await fb.usersCollection.doc(user.uid).set({
          id: form.id,
          name: form.name
        })
        commit('setLoading', false)
        commit('setSuccess', true)
        dispatch('fetchCurrentUser', user)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error)
        commit('setSuccess', false)
      }
    },
    async signin({ commit, dispatch }, form) {
      commit('setSuccess', null);
      commit('setLoading', true);
      commit('setError', null);
      try {
        // obtiene la info del usuario logeado para crear su estado
        const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
        commit('setLoading', false)
        commit('setSuccess', true)
        dispatch('fetchCurrentUser', user)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error)
        commit('setSuccess', false)
      }
    },
    async logout({ commit }) {
      // Realiza el logout, limpia el estado del usuarioy redirecciona al login
      await fb.auth.signOut()
      commit('setCurrentUser', {})
      router.push('/login')
    },
  },
  getters: {
    loadingStatus: state => state.loading,
    successStatus: state => state.success,
    errorStatus: state => state.error
  }
})

export default userStore