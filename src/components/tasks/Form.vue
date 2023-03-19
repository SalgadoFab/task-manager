<template>
  <section class="form-container">
    <div class="form-wrapper">
      <form class="form-tasks" action="#" ref="form">
        <div class="inputs-wrapper">
          <vs-row vs-type="flex">
            <vs-col
              vs-order="1"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <vs-input
                icon-after="true"
                type="text"
                label="Nombre"
                icon="email"
                v-model="task.name"
              />
            </vs-col>
            <vs-col
              vs-order="2"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <vs-select
                class="select-cat"
                label="Categoria"
                v-model="task.category"
              >
                <vs-select-item
                  icon-after="true"
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in categories"
                />
              </vs-select>
            </vs-col>
            <vs-col
              vs-order="3"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <vs-select
                class="select-assignee"
                autocomplete
                label="Designado a"
                v-model="task.assigneeId"
              >
                <vs-select-item
                  icon-after="true"
                  :key="index"
                  :value="item.id"
                  :text="item.name"
                  v-for="(item, index) in users"
                />
              </vs-select>
            </vs-col>
            <vs-col
              vs-order="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="flex-end"
              vs-w="3"
            >
              <date-picker
                placeholder="Fecha limite"
                v-model="task.expiration"
                :disabled-date="disabledBeforeToday"
                valueType="format"
              ></date-picker>
            </vs-col>
          </vs-row>
        </div>
        <div class="inputs-wrapper">
          <vs-textarea
            label="Descripcion de la tearea"
            v-model="task.description"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
//Stores
import userStore from "@/stores/userStore";

//
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "FormRegister",
  components: {
    DatePicker,
  },
  data: () => {
    return {
      categories: [
        { text: "Baja prioridad", value: 0 },
        { text: "Normal", value: 1 },
        { text: "Alta prioridad", value: 2 },
        { text: "Urgente", value: 3 },
      ],
      users: [],
      task: {
        name: "",
        category: "0",
        assigneeId: "",
        description: "",
        expiration: "",
      },
    };
  },
  computed: {
    successStatus() {
      return userStore.getters.successStatus;
    },
    loadingStatus() {
      return userStore.getters.loadingStatus;
    },
    errorMessage() {
      return userStore.getters.errorStatus;
    },
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    },
  },
  created() {
    userStore.dispatch("getUsers").then(() => {
      this.users = userStore.getters.users;
    });
  },
  watch: {
    task: {
      deep: true,
      handler (newData) {
        this.$emit("task-changed", newData)
      }
    }
  }
};
</script>