<template>
  <div class="developer-container">
    <div class="tab-container">
      <div class="tab-wrapper">
        <div class="icon-subheader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            />
          </svg>
        </div>
        <div style="margin-bottom: 20px" class="sub-header">Dev</div>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card>
              <div slot="header">
                <h3>{{ developer }}</h3>
              </div>
              <div class="body-card">
                <vs-avatar size="120px" :src="localSrc" />
                <span
                  >Estudiante de Ingeniera de Software de la Universidad
                  Cenfotec y desarollador para la empresa
                  <strong
                    ><a href="https://5e.cr/" target="_blank">5e.cr</a></strong
                  ></span
                >
              </div>
              <div slot="footer"></div>
            </vs-card>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperComponent",
  data() {
    return {
      localSrc: require("../../assets/imgs/developer.jpg"),
      developer: process.env.VUE_APP_DEVELOPER,
    };
  },
};
</script>
