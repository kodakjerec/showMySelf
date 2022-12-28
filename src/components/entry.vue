<template>
  <v-expansion-panels v-model="panel">
    <selfIntroduction :value="0" />
    <collections :value="1" />
    <skills :value="2" />
    <panelSummary :value="3" />
    <workExperience :value="4" />
    <education :value="5" />
  </v-expansion-panels>
</template>

<script>
import selfIntroduction from "./selfIntroduction.vue";
import collections from "./collections.vue";
import panelSummary from "./panelSummary.vue";
import education from "./education.vue";
import workExperience from "./workExperience.vue";
import skills from "./skills.vue";
export default {
  name: "entry",
  components: {
    selfIntroduction,
    collections,
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
