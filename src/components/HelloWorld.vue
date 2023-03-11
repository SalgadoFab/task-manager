<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
}
</script>
