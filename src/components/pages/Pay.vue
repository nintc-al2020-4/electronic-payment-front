<template>
  <div id="pay" class="container">
    <h4 class="h4">以下のQRコードをスキャンしてください</h4>
    <div class="qr-code">
      <qrcode-vue v-if="initialized" :value="paymentQrCode" :size="size" level="H"></qrcode-vue>
      <p v-else>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'Pay',
  components: {
    QrcodeVue
  },
  data() {
    return {
      paymentQrCode: '',
      size: 300,
      initialized: false,
      message: 'Now Loading...'
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.paymentQrCode = await this.retrievePaymentToken()
    },
    async retrievePaymentToken() {
      let token = ''

      await axios
        .get('/payment_token', {
          baseURL: process.env.VUE_APP_API_URL_BASE,
          headers: {
            Authorization: 'Token ' + this.$store.state.token
          },
          responseType: 'json'
        })
        .then((response) => {
          token = response.data.token
          this.initialized = true
        })
        .catch((err) => {
          this.message = '支払いトークンの取得に失敗しました'
          console.log(err)
        })

      console.log('[info] Token: ' + token)
      return token
    }
  }
}
</script>

<style scoped></style>
