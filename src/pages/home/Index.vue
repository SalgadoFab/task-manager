<template>
  <div class="home-container padding-app page-container">
    <div class="wrapper-info">
      <div class="content">
        <vs-tabs :color="colorx" alignment="center">
          <vs-tab @click="colorx = 'success'" label="Información">
            <div>
              <InformationComponent />
            </div>
          </vs-tab>
          <vs-tab @click="colorx = 'primary'" label="Curso">
            <div>
              <SubjectComponent />
            </div>
          </vs-tab>
          <vs-tab @click="colorx = 'warning'" label="Desarrollador">
            <div>
              <DeveloperComponent />
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </div>
    <div class="wrapper-action">
      <vs-button
        color="success"
        to="/tasks/create"
        type="gradient"
        icon="drive_file_rename_outline"
        >Crear nueva tarea</vs-button
      >
    </div>
  </div>
</template>

<script>
//Componentes
import InformationComponent from "@/components/home/Information.vue";
import SubjectComponent from "@/components/home/Subject.vue";
import DeveloperComponent from "@/components/home/Developer.vue";

export default {
  name: "Homepage",
  components: {
    InformationComponent,
    SubjectComponent,
    DeveloperComponent,
  },
  data: () => ({
    colorx: "success",
    showWelcomeMessage: true
  }),
  methods: {
    wellcomeMessage() {
      this.$vs.notify({
        color:'success',
        title:'Bienvenido!',
        text:'Que alegria tenerte de vuelta'
      })
    }, 
  },
  created() {
  // Comprobamos si la bandera ya ha sido establecida en localStorage
  const flag = localStorage.getItem('showWelcomeMessage')
  if (flag != 'false') {
    // Si la bandera no ha sido establecida, mostramos el mensaje de bienvenida y establecemos la bandera en localStorage
    this.showWelcomeMessage = false
    this.$nextTick(() => {
      this.wellcomeMessage()
      localStorage.setItem('showWelcomeMessage', false)
    })
  }
},
};
</script>
