<template>
  <div class="tasks-container padding-app page-container">
    <section class="user-tasks">
      <h1>{{ title }}</h1>
      <div class="change-view">
        <ul class="leftx">
          <li>
            <vs-radio
              @click="test()"
              v-model="currentView"
              vs-name="currentView"
              vs-value="my-tasks"
              >Mis tareas</vs-radio
            >
          </li>
          <li>
            <vs-radio
              @click="test()"
              v-model="currentView"
              vs-name="currentView"
              vs-value="all-tasks"
              >Todas las tareas</vs-radio
            >
          </li>
        </ul>
      </div>
      <div class="board-wrapper">
        <KanbanComponent :tasks="getUserTasks" :key="kanbanKey" />
      </div>
    </section>
  </div>
</template>

<script>
import taskStore from "@/stores/taskStore";
import KanbanComponent from "@/components/tasks/Kanban.vue";

export default {
  name: "UserTaskViews",
  components: {
    KanbanComponent,
  },
  data() {
    return {
      kanbanKey: 0,
      currentView: "my-tasks",
    };
  },
  computed: {
    title() {
      return this.currentView === 'my-tasks' ? 'Mis tareas' : 'Todas las tareas';
    },
    successStatus() {
      return taskStore.getters.successStatus;
    },
    loadingStatus() {
      return taskStore.getters.loadingStatus;
    },
    errorMessage() {
      return taskStore.getters.errorStatus;
    },
    getUserTasks() {
      return taskStore.getters.tasks;
    },
  },
  methods: {
    openLoading() {
      this.$vs.loading();
    },
    closeLoading() {
      this.$vs.loading.close();
    },
    showError() {
      this.$vs.dialog({
        color: "danger",
        title: "¡Error!",
        text: `Tenemos un problema: ${this.errorMessage}`,
        acceptText: "Ok",
      });
    },
  },
  watch: {
    loadingStatus(val) {
      if (val) {
        this.openLoading();
      } else {
        this.closeLoading();
      }
    },
    successStatus(val) {
      if (val === false) {
        this.showError();
      }
    },
    currentView(newVal) {
      if (newVal === "my-tasks") {
        taskStore.dispatch("getTasksByUser").then(() => {
          this.kanbanKey++;
        });
      } else {
        taskStore.dispatch("getTasks").then(() => {
          this.kanbanKey++;
        });
      }
    },
    getUserTasks() {
      this.kanbanKey++;
    },
  },
  created() {
    taskStore.dispatch("getTasksByUser");
  },
};
</script>
