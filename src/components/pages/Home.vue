<template>
  <div id="home" class="container">
    <router-link to="/wallet" class="card text-decoration-none">
      <div class="card-body">
        <h4 class="h4 card-title text-dark">残高</h4>
        <p class="h2 card-text align-middle text-dark">¥{{ balance }}</p>
      </div>
    </router-link>
    <div class="row">
      <div class="col-md-6 col-12">
        <router-link to="/charge" class="btn btn-dark text-light w-100 my-2" role="button"> チャージする </router-link>
      </div>
      <div class="col-md-6 col-12">
        <router-link to="pay" class="btn btn-dark text-light w-100 my-2" role="button">
          支払う(QRコード表示)
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      initialized: false
    }
  },
  computed: {
    balance() {
      return this.initialized ? this.$store.state.balance.toLocaleString() : '-'
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      await this.getBalance()
      this.initialized = true
    },
    async getBalance() {
      await this.$store.dispatch('retrieveBalance')
    }
  }
}
</script>

<style scoped></style>
