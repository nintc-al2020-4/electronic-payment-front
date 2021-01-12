<template>
  <div id="pay">
    <h4>以下のQRコードをスキャンしてください</h4>
    <div class="qr-code">
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>
    <a href="/" class="btn btn-dark" role="button">戻る</a>
  </div>

</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "Pay",
  data() {
    return {
      value: 'https://github.com/nintc-al2020-4/electronic-payment-front/',
      size: 300,
    }
  },
  components: {
    QrcodeVue,
  }
}
</script>

<style scoped>

</style>