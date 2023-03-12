<template>
  <div id="parentx">
    <vs-sidebar
      :reduce="reduce"
      :hidden-background="hidde_background"
      parent="body"
      default-index="1"
      color="success"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="100px" :src="localSrc" />
      </div>

      <vs-sidebar-group open title="Inicio">
        <vs-sidebar-item to="/" index="1" icon="menu">
          Dashboard
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-divider icon="create_new_folder" color="success" position="center">
        User
      </vs-divider>

      <vs-sidebar-group open title="Tareas">
        <vs-sidebar-item to="/tasks" index="2" icon="list">
          Listar
        </vs-sidebar-item>
        <vs-sidebar-item to="/tasks/create" index="3" icon="add_task">
          Crear
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-divider icon="notifications_none" color="success" position="center">
        User
      </vs-divider>

      <vs-sidebar-item to="/notifications" index="4" icon="account_box">
        Notificaciones
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button
          icon="exit_to_app"
          color="success"
          type="border"
          @click="logout()"
        >
        </vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "SidebarComponent",
  data: () => ({
    active: true,
    reduce: true,
    hidde_background: true,
    localSrc: require("../../assets/imgs/cenfotec-logo.png"),
    colorAlert: "success",
    titleAlert: "Alert",
  }),
  methods: {
    logout() {
      this.$vs.dialog({
        color: this.colorAlert,
        title: `Cerrar sesión`,
        text: "Estas apunto de cerra sesión, seguro que deseas continuar?",
        accept: this.confirmLogout,
        accept_text: "Continuar",
      });
    },
    confirmLogout() {
      store.dispatch("logout");
      this.$vs.notify({
        color: this.colorAlert,
        title: "Sesión cerrada con exito",
        text: "Vuelve pronto",
      });
    },
  },
};
</script>