<template>
  <section class="login-container padding-app page-container">
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
import userStore from "@/stores/userStore";

export default {
  name: "Loginpage",
  data: () => {
    return {
      signinForm: { email: "", password: "" },
      signupForm: { name: "", email: "", password: "" },
      signUp: false,
    };
  },
  //Define propiedades computadas del componente
  computed: {
    successStatus() {
      return userStore.getters.successStatus;
    },
    loadingStatus() {
      return userStore.getters.loadingStatus;
    },
    errorMessage() {
      return userStore.getters.errorStatus;
    },
  },
  methods: {
    signup() {
      userStore.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
      });
    },
    signin() {
      userStore.dispatch("signin", {
        email: this.signinForm.email,
        password: this.signinForm.password,
      });
    },
    openLoading(){
      this.$vs.loading()
    },
    closeLoading() {
      this.$vs.loading.close()
    },
    showError() {
      this.$vs.dialog({
        color: 'danger',
        title: '¡Error!',
        text: `Tenemos un problema: ${ this.errorMessage }`,
        acceptText:'Ok'
      });
    },
  },
  watch: {
    loadingStatus(val) {
      if (val) {
        this.openLoading()
      } else {
        this.closeLoading()
      }
    },
    successStatus(val) {
      if (val === false){
        this.showError()
      }
    }
  }
};
</script>