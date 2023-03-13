<template>
  <div id="app">
    <HeaderComponent/>
    <SidebarComponent />
    <main class="main-app-container">
      <router-view />
    </main>
  </div>
</template>

<script>

import SidebarComponent from "./components/layout/Sidebar.vue";
import HeaderComponent from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent
  }
};
</script>
