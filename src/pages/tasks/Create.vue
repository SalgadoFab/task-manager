<template>
  <div class="create-task-container padding-app page-container">
    <h1>Crear Tarea</h1>
    <div class="create-task-form">
      <div>Completa la informacion necesaria para crear una nueva tarea</div>
      <FormComponent @task-changed="updateTaskData" ref="formComponent" />
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
//Stores
import taskStore from "@/stores/taskStore";
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
    task: {},
  }),
  computed: {
    successStatus() {
      return taskStore.getters.successStatus;
    },
    loadingStatus() {
      return taskStore.getters.loadingStatus;
    },
    errorMessage() {
      return taskStore.getters.errorStatus;
    },
  },
  methods: {
    updateTaskData(newData) {
      this.task = newData;
    },
    alertOnSuccess() {
      this.$vs.notify({
        title: "Nueva tarea registrada",
        text: this.task.name,
        color: "success",
        icon: "add_task",
        position: "top-right",
      });
    },
    onSubmitTask() {
      taskStore.dispatch("createTask", {
        name: this.task.name,
        description: this.task.description,
        category: this.task.category,
        assigneeId: this.task.assigneeId,
        expiration: this.task.expiration,
      });
    },
  },
  watch: {
    successStatus(val) {
      if (val === true) {
        this.alertOnSuccess();
        this.$refs.formComponent.resetForm();
      }
    },
  },
};
</script>
