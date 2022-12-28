<template>
  <v-expansion-panel>
    <v-expansion-panel-title>資格綜述</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item> 主要程式語言為<span class="blue-font">JavaScript</span>，專精於前端網頁(<span class="blue-font">Vue.js</span>)</v-list-item>
        <v-list-item><span class="red-font">12</span>年以上的軟體開發實務經驗。</v-list-item>
        <v-list-item><span class="red-font">8</span>年以上<span class="blue-font">MS SQL Server管理經驗</span></v-list-item>
        <v-list-item><span class="red-font">3</span>年專案管理經驗</v-list-item>
        <v-list-item><span class="red-font">2</span>年管理經驗，帶領兩位工程師</v-list-item>
        <v-list-item>良好的溝通與傾聽技能，長期與客戶端進行互動。</v-list-item>
        <v-list-item>可獨立或與團隊成員搭配合作。</v-list-item>
        <v-list-item>有新人訓練和潛能開發經驗。</v-list-item>
        <v-list-item>已完成專案：中壽系統翻新、公司內網ERP系統、渣打網銀、物流車機、物流計費、生鮮包裝機維護、生鮮進出貨系統</v-list-item>
        Github:
        <a href="https://github.com/kodakjerec" target="_blank">https://github.com/kodakjerec</a>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "panelSummary",
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
