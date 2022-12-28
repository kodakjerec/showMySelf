<template>
  <v-expansion-panel>
    <v-expansion-panel-title>學歷</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item>
          <h3>靜宜大學 資訊管理系 碩士</h3>
          <span class="blue-font">2005/9-2007/6</span> 畢業<br
        /></v-list-item>
        <v-list-item
          ><h3>靜宜大學 資訊管理系 學士</h3>
          <span class="blue-font">2001/9-2005/6</span> 畢業</v-list-item
        >
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "education",
};
</script>

<style lang="scss" scoped>
.blue-font {
  color: blue;
}
.red-font {
  color: red;
}
</style>
