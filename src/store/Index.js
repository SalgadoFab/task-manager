import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'

Vue.use(Vuex)

// export default new Vuex.Store({
const store = new Vuex.Store({
  // Acciones de interracion con base de datos
  actions: {
    async signup({ dispatch }, form) {
      // Creacion del usuario
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      // Creacion del usuario como objecto del collection
      await fb.usersCollection.doc(user.uid).set({
        id: form.id,
        name: form.name
      })
    }
  }
})

export default store