<template>
  <div class="create-task-container padding-app page-container">
    <h1>Crear Tarea</h1>
    <div class="create-task-form">
      <div>Completa la informacion necesaria para crear una nueva tarea</div>
      <FormComponent
        @task-changed="updateTaskData"
      />
      <div class="wrapper-action">
        <vs-button
          color="success"
          type="gradient"
          icon="drive_file_rename_outline"
          @click="onSubmitTask()"
          >Crear nueva tarea</vs-button
        >
      </div>
    </div>
  </div>
</template>
<script>
//Componentes
import FormComponent from "@/components/tasks/Form.vue";

export default {
  name: "CreateTaskPage",
  components: {
    FormComponent,
  },
  data: () => ({
    colorx: "success",
    showWelcomeMessage: true,
    task: {}
  }),
  methods: {
    updateTaskData(newData) {
      this.task = newData;
    },
    onSubmitTask() {
      console.log(this.task)
    }
  }
};
</script>
