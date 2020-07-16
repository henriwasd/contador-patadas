<template>
  <v-app>
    <v-content>
      <Cronometro />
    </v-content>
  </v-app>
</template>

<script>
import Cronometro from "./components/Cronometro";

export default {
  name: "App",

  components: {
    Cronometro
  },

  data: () => ({
    //Teste de commit
  })
};
</script>
