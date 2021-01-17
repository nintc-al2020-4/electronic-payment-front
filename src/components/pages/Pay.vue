<template>
  <div id="pay" v-if="initialized">
    <h4>以下のQRコードをスキャンしてください</h4>
    <div class="qr-code">
      <qrcode-vue :value="paymentQrCode" :size="size" level="H"></qrcode-vue>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: "Pay",
  data() {
    return {
      paymentQrCode: "",
      size: 300,
      initialized: false
    }
  },
  components: {
    QrcodeVue,
  },
  methods: {
    async retrievePaymentToken() {
      const axiosBase = require('axios');
      const axios = axiosBase.create({
        baseURL: process.env.VUE_APP_API_URL_BASE,
        headers: {
          'Authorization': 'Token ' + this.$store.state.token
        },
        responseType: 'json'
      });
      await axios.get("/payment_token").then(response => {
        console.log(response);
        this.$data.paymentQrCode = response.data.token;
        this.initialized = true;
      }).catch(err => {
        console.log(err);
      });
    },

    async init() {
      this.retrievePaymentToken();
    },
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>

</style>
