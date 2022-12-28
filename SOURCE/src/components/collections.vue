<template>
  <v-expansion-panel>
    <v-expansion-panel-title>github作品集</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item v-for="item in formdata" :key="item.title" :title="item.title" :subtitle="item.sub"
          ><a :href="item.url">{{ item.url }}</a> </v-list-item
        ><v-list-item> </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "collections",
  data: () => ({
    formdata: [
      { title: "空氣偵測儀", sub: "Arduino", url: "https://github.com/kodakjerec/AirQualityDetector" },
      { title: "禮儀系統前端", sub: "Vue.js", url: "https://github.com/kodakjerec/seelovebonus" },
      { title: "禮儀系統後台", sub: "Node.js", url: "https://github.com/kodakjerec/seeloveNodeServer" },
      { title: "賓果小遊戲", sub: "Vue.js", url: "https://github.com/kodakjerec/chanyunbingo2019" },
      { title: "西元農曆轉換", sub: "T-SQL", url: "https://github.com/kodakjerec/LunarSolarConverter-tsql" },
      { title: "報表主機自動登入", sub: "SSRS", url: "https://github.com/kodakjerec/CustomSecuritySample2016" },
      { title: "webCam移動辨識", sub: "C#", url: "https://github.com/kodakjerec/webCamMotionDetector" },
      { title: "秘密儲存空間secureStorage", sub: "Java,iOS", url: "https://github.com/kodakjerec/cordova-plugin-secure-storage-echo" },
      { title: "指紋辨識元件", sub: "Java,iOS", url: "https://github.com/kodakjerec/cordova-plugin-android-fingerprint-auth-with-compat" },
      { title: "地理定位元件", sub: "Java,iOS", url: "https://github.com/kodakjerec/myGeofence" },
      { title: "內崁網頁元件", sub: "Java,iOS", url: "https://github.com/kodakjerec/myWebView" },
      { title: "App整合第三方輸入法", sub: "Java,iOS", url: "https://github.com/kodakjerec/myPaykey" },
      { title: "倉儲手機操作系統", sub: "Angular.js", url: "https://github.com/kodakjerec/SMD_HandRF" },
      { title: "第三方物流", sub: "Asp.net", url: "https://github.com/kodakjerec/3PL" },
      { title: "車機操作系統", sub: "C#", url: "https://github.com/kodakjerec/CarSystem" },
      { title: "", sub: "", url: "" },
    ],
  }),
};
</script>
