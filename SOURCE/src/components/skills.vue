<template>
  <v-expansion-panel>
    <v-expansion-panel-title>資訊技能</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-badge color="red" :content="5" inline>精通</v-badge>
      <v-badge color="blue" :content="4" inline>熟練</v-badge>
      <v-badge color="blue" :content="3" inline>基本</v-badge>
      <v-badge color="green" :content="2" inline>了解</v-badge>
      <v-badge color="green" :content="1" inline>略懂</v-badge>
      <v-list>
        <v-list-item title="程式語言">
          <v-btn v-for="item in programs" :key="item.title" variant="outlined" class="btn-space"
            >{{ item.title }}
            <v-badge v-if="item.skilled === 5" color="red" :content="item.skilled" inline></v-badge>
            <v-badge v-else-if="item.skilled > 2" color="blue" :content="item.skilled" inline></v-badge>
            <v-badge v-else color="green" :content="item.skilled" inline></v-badge> </v-btn
        ></v-list-item>
        <v-list-item title="框架">
          <v-btn v-for="item in frameworks" :key="item.title" variant="outlined" class="btn-space"
            >{{ item.title }}
            <v-badge v-if="item.skilled === 5" color="red" :content="item.skilled" inline></v-badge>
            <v-badge v-else-if="item.skilled > 2" color="blue" :content="item.skilled" inline></v-badge>
            <v-badge v-else color="green" :content="item.skilled" inline></v-badge></v-btn
        ></v-list-item>
        <v-list-item title="伺服器">
          <v-btn v-for="item in servers" :key="item.title" variant="outlined" class="btn-space"
            >{{ item.title }}
            <v-badge v-if="item.skilled === 5" color="red" :content="item.skilled" inline></v-badge>
            <v-badge v-else-if="item.skilled > 2" color="blue" :content="item.skilled" inline></v-badge>
            <v-badge v-else color="green" :content="item.skilled" inline></v-badge></v-btn
        ></v-list-item>
        <v-list-item title="資料庫">
          <v-btn v-for="item in dbs" :key="item.title" variant="outlined" class="btn-space"
            >{{ item.title }}
            <v-badge v-if="item.skilled === 5" color="red" :content="item.skilled" inline></v-badge>
            <v-badge v-else-if="item.skilled > 2" color="blue" :content="item.skilled" inline></v-badge>
            <v-badge v-else color="green" :content="item.skilled" inline></v-badge></v-btn
        ></v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "skills",
  data: () => ({
    programs: [
      { title: "JavaScript", skilled: 4 },
      { title: "C#", skilled: 4 },
      { title: "C++", skilled: 4 },
      { title: "HTML", skilled: 4 },
      { title: "CSS", skilled: 4 },
      { title: "Jquery", skilled: 4 },
      { title: "Arduino", skilled: 3 },
      { title: "Asp.Net(2.5~4)", skilled: 3 },
      { title: "Java", skilled: 2 },
      { title: "Cordova", skilled: 2 },
    ],
    frameworks: [
      { title: "Angular.io", skilled: 4 },
      { title: "Vue.js", skilled: 4 },
      { title: "Node.js", skilled: 4 },
      { title: "Vuetify", skilled: 3 },
      { title: "Element.io", skilled: 3 },
    ],
    servers: [
      { title: "IIS", skilled: 4 },
      { title: "IBM WebSphere", skilled: 2 },
    ],
    dbs: [
      { title: "Store Procedure", skilled: 5 },
      { title: "MS SQL", skilled: 4 },
      { title: "SQL Server Reporting Services", skilled: 3 },
      { title: "MySQL", skilled: 3 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.btn-space {
  margin: 2px;
}
</style>
