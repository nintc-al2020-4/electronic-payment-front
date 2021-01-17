<template>
  <div v-if="initialized" id="pay">
    <h4>以下のQRコードをスキャンしてください</h4>
    <div class="qr-code">
      <qrcode-vue :value="paymentQrCode" :size="size" level="H"></qrcode-vue>
    </div>
    <a href="/" class="btn btn-dark" role="button">戻る</a>
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
      initialized: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    async getAndSetPaymentToken() {
      await axios
        .get('/payment_token', {
          baseURL: process.env.VUE_APP_API_URL_BASE,
          headers: {
            Authorization: 'Token ' + this.$store.state.token
          },
          responseType: 'json'
        })
        .then((response) => {
          console.log(response)
          this.$data.paymentQrCode = response.data.token
          this.initialized = true
        })
        .catch((err) => {
          console.log(err)
        })
    },

    async init() {
      await this.getAndSetPaymentToken()
    }
  }
}
</script>

<style scoped></style>
