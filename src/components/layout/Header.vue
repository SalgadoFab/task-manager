<template>
  <section class="heading-container" v-if="showHeader" >
    <div class="header-wrapper">
      <div class="title-container">
        <h1>
          {{ title }}
          <br />
          <span> by {{developer}} </span>
        </h1>
      </div>

      <SocialMediaComponent/>

    </div>

    <div class="asset-radius">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        class="effect1config"
      >
        <path
          id="Trazado_200"
          data-name="Trazado 200"
          d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
          transform="translate(0 10)"
        ></path>
      </svg>
    </div>
  </section>
</template>
<script>
import SocialMediaComponent from "./SocialMedia.vue";
export default {
  name: "HeaderComponent",
  components: {
    SocialMediaComponent
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      developer: process.env.VUE_APP_DEVELOPER,
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