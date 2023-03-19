<template>
  <div class="tasks-container padding-app page-container">
    <section class="user-tasks">
      <h1>Mis tareas</h1>
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
    };
  },
  computed: {
    getUserTasks() {
      return taskStore.getters.tasks;
    },
  },
  watch: {
    getUserTasks() {
      this.kanbanKey++;
    },
  },
  created() {
    taskStore.dispatch("getTasksByUser");
  },
};
</script>
