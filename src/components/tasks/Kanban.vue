<template>
  <section class="kanban-container">
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateTask">
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div class="block-wrapper">
          <div class="head-task">
            <div class="expiration">
              <span class="material-icons"> today </span>
              {{ getSmallData(block.expiration) }}
            </div>
            <div class="show-more">
              <a @click="showDescription(block.category, block.description)">
                <span class="material-icons"> open_in_full </span>
              </a>
            </div>
          </div>
          <div class="body-task">
            <p>
              {{ block.name }}
            </p>
          </div>
          <div class="footer-task">
            <div class="category" :style="getClassCategory(block.category)">
              {{ getCategory(block.category) }}
            </div>
            <vs-tooltip :text="block.assigneeName" position="right">
              <div class="asigned">
                {{ getSmallName(block.assigneeName) }}
              </div>
            </vs-tooltip>
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
      color: "primary",
      title: "Descripcion de la tarea",
    };
  },
  methods: {
    updateTask(id, status) {
      taskStore.dispatch("updateTask", {
        id,
        status,
      });
    },
    getHex(id) {
      const colors = {
        0: "#1f74ff",
        1: "#46c93a",
        2: "#ffba00",
        3: "#ff4757",
      };
      return colors[id];
    },
    getCategory(id) {
      const cats = {
        0: "Baja prioridad",
        1: "Normal",
        2: "Alta prioridad",
        3: "Urgente",
      };
      return cats[id] || "";
    },
    getClassCategory(id) {
      return `background: ${this.getHex(id)};` || "";
    },
    getSmallData(date) {
      const dateObj = new Date(date);
      const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const monthIndex = dateObj.getUTCMonth();
      const day = dateObj.getUTCDate();
      const monthName = monthNames[monthIndex];
      return `${monthName} ${day}`;
    },
    getSmallName(name) {
      const words = name.split(" ");
      let initials = "";
      for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0).toUpperCase();
      }
      return initials;
    },
    showDescription(idColor, description) {
      const type = description ? "dialog" : "notify";
      this.$vs[type]({
        color: type === "dialog" ? this.getHex(idColor) : "danger",
        title: this.title,
        text: description || "Descripción no proporcionada",
        acceptText:'Aceptar',
        position: type === "notify" ? "top-right" : undefined,
        icon: type === "notify" ? "error" : undefined,
      });
    },
  },
};
</script>
