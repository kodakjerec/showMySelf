<template>
  <v-expansion-panel>
    <v-expansion-panel-title>資訊技能</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>程式語言</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="item in programs" :key="item.title" :title="item.title">
                <template v-slot:append>
                  <v-badge v-if="item.skilled > 3" color="info" :content="item.skilled" inline></v-badge>
                  <v-badge v-else color="warning" :content="item.skilled" inline></v-badge>
                </template>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>框架</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="item in frameworks" :key="item.title" :title="item.title">
                <template v-slot:append>
                  <v-badge v-if="item.skilled > 3" color="info" :content="item.skilled" inline></v-badge>
                  <v-badge v-else color="warning" :content="item.skilled" inline></v-badge> </template
              ></v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>伺服器</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="item in servers" :key="item.title" :title="item.title">
                <template v-slot:append>
                  <v-badge v-if="item.skilled > 3" color="info" :content="item.skilled" inline></v-badge>
                  <v-badge v-else color="warning" :content="item.skilled" inline></v-badge> </template
              ></v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>資料庫</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="item in dbs" :key="item.title" :title="item.title">
                <template v-slot:append>
                  <v-badge v-if="item.skilled > 3" color="info" :content="item.skilled" inline></v-badge>
                  <v-badge v-else color="warning" :content="item.skilled" inline></v-badge> </template
              ></v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
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
      { title: "Cordova", skilled: 3 },
      { title: "Java", skilled: 2 },
      { title: "Asp.Net(2.5~4)", skilled: 3 },
      { title: "HTML", skilled: 4 },
      { title: "CSS", skilled: 4 },
      { title: "Jquery", skilled: 4 },
    ],
    frameworks: [
      { title: "Vue.js", skilled: 4 },
      { title: "Element.io", skilled: 4 },
      { title: "Vuetify", skilled: 4 },
      { title: "Angular.io", skilled: 4 },
      { title: "Node.js", skilled: 4 },
    ],
    servers: [
      { title: "IIS", skilled: 4 },
      { title: "IBM WebSphere", skilled: 3 },
    ],
    dbs: [
      { title: "MS SQL", skilled: 4 },
      { title: "Store Procedure", skilled: 5 },
      { title: "SQL Server Reporting Services", skilled: 3 },
      { title: "MySQL", skilled: 3 },
    ],
  }),
};
</script>
