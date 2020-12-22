<template>
 <h4>以下のQRコードをスキャンしてください</h4>
 <!--QRコードは仮です。リポジトリのトップのQRコードです。-->
 <PayQR></PayQR><br>
 <a href="/" class="btn btn-dark" role="button">戻る</a>
</template>

<script>
import PayQR from '@/components/parts/Pay_Qr.vue'

export default {
  name: "Pay",
  components: {
    PayQR
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>