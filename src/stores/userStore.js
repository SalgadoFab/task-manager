import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  // Estados
  state: {
    currentUser: {},
  },
  // Mutaciones
  mutations: {
    //Instancia el estado del usuario logeado
    setCurrentUser(state, val) {
      state.currentUser = val
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
    async signup({ dispatch }, form) {
      // Creacion del usuario
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      // Creacion del usuario como objecto del collection
      await fb.usersCollection.doc(user.uid).set({
        id: form.id,
        name: form.name
      })
      // Inicio del flujo para logear el usuario
      dispatch('fetchCurrentUser', user)
    },
    async signin({ dispatch }, form) {
      // obtiene la info del usuario logeado para crear su estado
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchCurrentUser', user)
    },
    async logout({ commit }) {
      // Realiza el logout, limpia el estado del usuarioy redirecciona al login
      await fb.auth.signOut()
      commit('setCurrentUser', {})
      router.push('/login')
    },
  }
})

export default userStore