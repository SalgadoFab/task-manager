<template>
  <div id="app">
    <HeaderComponent v-if="showHeader" />
    <main class="main-app-container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
    };
  },
  watch: {
    $route(to) {
      this.showHeader = to.path !== '/login';
    },
  },
};
</script>
