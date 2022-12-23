<template>
  <v-expansion-panels>
    <panelSummary />
    <education />
    <workExperience />
  </v-expansion-panels>
</template>

<script>
import panelSummary from "./panelSummary.vue";
import education from "./education.vue";
import workExperience from "./workExperience.vue";
export default {
  name: "entry",
  components: {
    panelSummary,
    education,
    workExperience,
  },
  data() {
    return {};
  },
};
</script>
