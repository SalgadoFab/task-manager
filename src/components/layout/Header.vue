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

    <SidebarComponent />
  </section>
</template>
<script>
import SidebarComponent from "./Sidebar.vue";
import SocialMediaComponent from "./SocialMedia.vue";
export default {
  name: "HeaderComponent",
  components: {
    SidebarComponent,
    SocialMediaComponent
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      description: process.env.VUE_APP_DESCRIPTION,
      developer: process.env.VUE_APP_DEVELOPER,
      github: process.env.VUE_APP_GITHUB,
      linkedin: process.env.VUE_APP_LINKEDIN,
      insta: process.env.VUE_APP_INSTA,
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