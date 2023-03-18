<template>
  <div class="create-task-container padding-app">
    <h1>Crear Tarea</h1>
    <Register/>
  </div>
</template>
<script>
//Componentes
import Register from "@/components/tasks/FormRegister.vue";

export default {
  name: "CreateTaskPage",
  components: {
    Register,
  },
  data: () => ({
    colorx: "success",
    showWelcomeMessage: true,
  })
};
</script>
