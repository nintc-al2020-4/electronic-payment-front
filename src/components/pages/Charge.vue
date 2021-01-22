<template>
  <div id="charge" class="container">
    <div class="row">
      <div class="col-md-6 col-12 mb-2">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">入金額</h4>
            <div class="form-group">
              <label>
                入金額を入力してください
                <input v-model.number="amount" type="number" class="form-control" min="0" />
              </label>
              <p v-show="NotNumber" :style="styleObject">入力が数値ではありません</p>
            </div>
            <button class="btn btn-dark" @click="onSubmit()">チャージ</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-2">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">残高</h4>
            <div class="row">
              <p class="col-5">
                {{ balance }}
              </p>
              <p class="col-2">→</p>
              <p class="col-5">
                {{ balance + Number(amount) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Charge',

  data() {
    return {
      balance: 0,
      amount: null,
      styleObject: {
        color: 'red'
      }
    }
  },
  computed: {
    NotNumber() {
      const value = Number(this.amount)
      return Number.isNaN(value)
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.amount = null
      this.balance = await this.getBalance()
    },
    onSubmit() {
      axios
        .post(
          '/refills',
          {
            amount: Number(this.amount)
          },
          {
            baseURL: process.env.VUE_APP_API_URL_BASE,
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Token ' + this.$store.state.token
            },
            responseType: 'json'
          }
        )
        .then(() => {
          this.init()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getBalance() {
      await this.$store.dispatch('retrieveBalance')
      return this.$store.state.balance
    }
  }
}
</script>

<style scoped>
input[type='file'] {
  overflow: hidden;
}
</style>
