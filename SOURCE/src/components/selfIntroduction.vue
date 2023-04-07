<template>
  <v-expansion-panel>
    <v-expansion-panel-title>自我介紹</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-card>
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img src="head.jpg"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h5" aria-label="簡克達"> 簡克達<br />Chien <span @click="gotoHomeStatus()">Ko</span> Ta
            </v-card-title>

            <v-card-subtitle aria-label="自述 喜歡嘗試、很忙的工程師">喜歡嘗試、很忙的工程師</v-card-subtitle>

            <v-card-actions>
              <div aria-label="email">
                <v-btn icon="mdi-email" href="mailto:kodakjerec@gmail.com"></v-btn>
                <v-tooltip activator="parent">eMail: kodakjerec@gmail.com</v-tooltip>
              </div>
              <div aria-label="instagram">
                <v-btn icon="mdi-instagram" color="purple" target="_blank"
                  href="https://www.instagram.com/kotachien/"></v-btn>
                <v-tooltip activator="parent">instagram: https://www.instagram.com/kotachien/</v-tooltip>
              </div>
              <div aria-label="facebook">
                <v-btn icon="mdi-facebook" color="blue" target="_blank"
                  href="https://www.facebook.com/kotachien/"></v-btn>
                <v-tooltip activator="parent">facebook: https://www.facebook.com/kotachien/</v-tooltip>
              </div>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "selfIntroduction",
  methods: {
    gotoHomeStatus() {
      this.$router.replace('/homeStatus')
    }
  }
};
</script>
