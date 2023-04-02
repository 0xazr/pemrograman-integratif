<template>
  <router-view/>
</template>
<script>
import { useApp } from "./stores/index.js";

export default {
  name: "App",
  setup() {
    const App = useApp();
    return {
      App,
    };
  },
};
</script>