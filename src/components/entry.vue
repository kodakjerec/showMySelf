<template>
  <v-expansion-panels v-model="panel">
    <selfIntroduction :value="0" />
    <panelSummary :value="1" />
    <education :value="2" />
    <workExperience :value="3" />
    <skills :value="4" />
  </v-expansion-panels>
</template>

<script>
import selfIntroduction from "./selfIntroduction.vue";
import panelSummary from "./panelSummary.vue";
import education from "./education.vue";
import workExperience from "./workExperience.vue";
import skills from "./skills.vue";
export default {
  name: "entry",
  components: {
    selfIntroduction,
    panelSummary,
    education,
    workExperience,
    skills,
  },
  data: () => ({
    panel: 0,
  }),
};
</script>
