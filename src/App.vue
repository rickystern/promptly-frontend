<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
import Layout from "./layout/Layout.vue";

export default {
  name: "App",

  components: {
    Layout,
  },
};
</script>