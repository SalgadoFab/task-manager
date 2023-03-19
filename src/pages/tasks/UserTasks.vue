<template>
  <div class="tasks-container padding-app page-container">
    <section class="user-tasks">
      <h1>Mis tareas</h1>
      <div class="board-wrapper">
        <KanbanComponent :tasks="tasks" />
      </div>
    </section>
  </div>
</template>
    
<script>
import KanbanComponent from "@/components/tasks/Kanban.vue";
export default {
  name: "UserTaskViews",
  components: {
    KanbanComponent,
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          status: "on-hold",
          title: "Tarea 1",
          description: "",
          expiration: "",
          category: "",
          asigned: "",
        },
      ],
    };
  },
};
</script>
  