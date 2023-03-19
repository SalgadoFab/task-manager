<template>
  <div class="tasks-container padding-app">
    <h1>Tareas</h1>
    <div class="list-container">
      <kanban-board
        :stages="stages"
        :blocks="blocks"
        @update-block="updateBlock"
      >
        <div v-for="block in blocks" :slot="block.id" :key="block.id">
          <div><strong>id:</strong> {{ block.id }}</div>
          <div>
            {{ block.title }}
          </div>
        </div>
      </kanban-board>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "TaskViews",
  data() {
    return {
      stages: ["on-hold", "in-progress", "needs-review", "approved"],
      blocks: [
        {
          id: 0,
          status: "approved",
          title: "Tarea 1",
        },
        {
          id: 1,
          status: "in-progress",
          title: "Tarea 2",
        },
        {
          id: 2,
          status: "on-hold",
          title: "Tarea 3",
        },
        {
          id: 3,
          status: "approved",
          title: "Tarea 4",
        },
        {
          id: 4,
          status: "needs-review",
          title: "Tarea 5",
        },
        {
          id: 5,
          status: "approved",
          title: "Tarea 6",
        },
        {
          id: 6,
          status: "in-progress",
          title: "Tarea 7",
        },
      ],
      listPrimitive: null,
    };
  },
  methods: {
    updateBlock(id, status) {
      console.log(id, status)
    },
  },
};
</script>
