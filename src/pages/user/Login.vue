<template>
  <section class="login-container padding-app">
    <div class="login-wrapper" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h1>Gestor de Tareas</h1>
            <h2>Ya tienes una cuenta?</h2>
            <div class="help-text">
              <p>
                Inicia sesion con tus datos, has click el boton para iniciar
                sesion
              </p>
              <vs-button
                color="primary"
                type="gradient"
                icon="login"
                @click="signUp = !signUp"
                >Iniciar sesion
              </vs-button>
            </div>
          </div>
          <div class="overlay-right">
            <h1>Gestor de Tareas</h1>
            <h2>Aun no estas registrado?</h2>
            <div class="help-text">
              <p>Has click en el boton para registrarte!</p>
              <vs-button
                color="primary"
                type="gradient"
                icon="create"
                @click="signUp = !signUp"
                >Crear cuenta
              </vs-button>
            </div>
          </div>
        </div>
      </div>

      <form class="sign-up" @submit.prevent>
        <h2>Sign Up</h2>
        <div>Crea una cuenta usando tus datos para continuar</div>
        <div class="inputs-wrapper">
          <vs-input
            icon-after="true"
            label-placeholder="Nombre"
            icon="person"
            placeholder="Nombre"
            v-model="signupForm.name"
          />
          <vs-input
            icon-after="true"
            label-placeholder="Identificacion"
            icon="badge"
            placeholder="Identificacion"
            v-model="signupForm.id"
          />
          <vs-input
            icon-after="true"
            label-placeholder="Email"
            icon="email"
            placeholder="Email"
            v-model="signupForm.email"
          />
          <vs-input
            icon-after="true"
            label-placeholder="Contraseña"
            icon="password"
            placeholder="Contraseña"
            v-model="signupForm.password"
          />
        </div>
        <vs-button
          color="primary"
          type="gradient"
          icon="create"
          @click="signup()"
          >Crear cuenta
        </vs-button>
      </form>

      <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Ingresa tus datos para iniciar sesión</div>
        <div class="inputs-wrapper">
          <vs-input
            icon-after="true"
            label-placeholder="Email"
            icon="email"
            placeholder="Email"
            v-model="signinForm.email"
          />
          <vs-input
            icon-after="true"
            label-placeholder="Contraseña"
            icon="password"
            placeholder="Contraseña"
            v-model="signinForm.password"
          />
        </div>
        <vs-button 
          color="primary" 
          type="gradient" 
          icon="login"
          @click="signin()"
          >Iniciar sesion
        </vs-button>
      </form>
    </div>
  </section>
</template>
  
<script>
import store from "@/store";

export default {
  name: "Loginpage",
  data: () => {
    return {
      signinForm: { email: "", password: "" },
      signupForm: { name: "", id: "", email: "", password: "" },
      signUp: false,
    };
  },
  methods: {
    signup() {
      store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        id: this.signupForm.id,
      });
    },
    signin() {
      store.dispatch("signin", {
        email: this.signinForm.email,
        password: this.signinForm.password
      });
    },
  },
};
</script>