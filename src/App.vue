<template>
  <div id="app">
    <HeaderComponent/>
    <main class="main-app-container">
      <router-view />
    </main>
  </div>
</template>

<script>

import HeaderComponent from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
};
</script>
