<template>
  <section class="form-container">
    <div class="form-wrapper">
      <form class="sign-in" action="#">
        <div>Completa la informacion necesaria antes de continuar</div>
        <div class="inputs-wrapper">
          <vs-input
            icon-after="true"
            label-placeholder="Email"
            icon="email"
            placeholder="Email"
            v-model="task.name"
          />
          <vs-input
            icon-after="true"
            label-placeholder="Contraseña"
            icon="password"
            placeholder="Contraseña"
            v-model="task.descriptioon"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormRegister",
  data: () => {
    return {
      task: { name: "", descriptioon: "" },
      signUp: false,
    };
  },
};
</script>