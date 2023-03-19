<template>
  <div class="tasks-container padding-app page-container">
    <section class="user-tasks">
      <h1>Mis tareas</h1>
      <div class="board-wrapper">
        <KanbanComponent/>
      </div>
    </section>
  </div>
</template>
    
<script>
//Componentes
import KanbanComponent from "@/components/tasks/Kanban.vue";

export default {
  name: "UserTaskViews",
  components: {
    KanbanComponent,
  },
  data() {
    return {};
  },
};
</script>
  