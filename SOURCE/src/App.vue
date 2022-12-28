<template>
  <v-app>
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <entry />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import entry from "./components/entry.vue";

export default {
  name: "App",

  components: {
    entry,
  },

  data: () => ({
    //
  }),
};
</script>
