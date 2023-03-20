<template>
  <section class="kanban-container">
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateTask">
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div class="block-wrapper">
          <div class="head-task">
            <div class="expiration">
              {{ block.expiration }}
            </div>
            <div class="show-more">Ver detalle</div>
          </div>
          <div class="body-task">
            {{ block.name }}
          </div>
          <div class="footer-task">
            <div class="category">
              {{ getCategory(block.category) }}
            </div>
            <div class="asigned">

            </div>
          </div>
        </div>
      </div>
    </kanban-board>
  </section>
</template>
<script>
//Stores
import taskStore from "@/stores/taskStore";
export default {
  name: "KanbanComponent",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      stages: ["on-hold", "in-progress", "needs-review", "approved"],
      blocks: this.tasks,
    };
  },
  methods: {
    updateTask(id, status) {
      taskStore.dispatch("updateTask", {
        id,
        status,
      });
    },
    getCategory(id) {
      const cats = {
        0: "Baja prioridad",
        1: "Normal",
        2: "Alta prioridad",
        3: "Urgente"
      };
      return cats[id] || "";
    },
  },
};
</script>