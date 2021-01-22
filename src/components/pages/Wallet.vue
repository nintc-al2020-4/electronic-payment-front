<template>
  <div id="Wallet">
    <div class="container">
      <div class="top">
        <div class="title">WALLET</div>
        <div class="money-amount">{{ moneyAmount }}<span class="tani">JPY</span></div>
      </div>
      <div class="money-kinds-wrapper">
        <div class="money-kinds">
          <div v-for="currencyAmount in filteredCurrencyAmounts" :key="currencyAmount.key" class="money-kind">
            <div class="money-images">
              <transition-group name="flip" mode="out-in" appear>
                <div v-for="n of currencyAmount.quantity" :key="n.key" class="money-image">
                  <img
                    class="money"
                    :src="getCurrencyImage(currencyAmount.denomination)"
                    :alt="`${currencyAmount.denomination}円`"
                  />
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet',

  data() {
    return {
      initialized: false,
      money: 0,
      currencyAmounts: [
        { denomination: 1, quantity: 0 },
        { denomination: 5, quantity: 0 },
        { denomination: 10, quantity: 0 },
        { denomination: 50, quantity: 0 },
        { denomination: 100, quantity: 0 },
        { denomination: 500, quantity: 0 },
        { denomination: 1000, quantity: 0 },
        { denomination: 5000, quantity: 0 },
        { denomination: 10000, quantity: 0 }
      ]
    }
  },
  computed: {
    sortedCurrencyAmountsByDenomination() {
      const currencyAmounts = this.currencyAmounts.concat()

      return currencyAmounts.sort((a, b) => {
        return b.denomination - a.denomination
      })
    },
    filteredCurrencyAmounts() {
      return this.sortedCurrencyAmountsByDenomination.filter((x) => x.quantity > 0)
    },
    moneyAmount() {
      return this.initialized ? this.money.toLocaleString() : '-'
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const balance = await this.getBalance()
      this.money = balance
      this.showBalance(balance)
      this.initialized = true
    },
    async getBalance() {
      await this.$store.dispatch('retrieveBalance')
      return this.$store.state.balance
    },
    getCurrencyImage(currency) {
      return `/img/${currency}.png`
    },
    showBalance(balance) {
      const currencies = this.sortedCurrencyAmountsByDenomination.map((x) => x.denomination)

      currencies.reduce((tmp, currency) => {
        const index = this.currencyAmounts.findIndex((elem) => elem.denomination === currency)

        this.currencyAmounts[index].quantity = Math.floor(tmp / currency)
        return tmp % currency
      }, balance)
    }
  }
}
</script>
<style scoped>
img.money {
  height: 13vw;
  padding: 2%;
  filter: drop-shadow(0 0 1vw rgba(0, 0, 0, 0.25));
}
.top {
  padding: 5%;
  margin: 5%;
  border-radius: 27px;
  background: #e0e0e0;
  box-shadow: 18px 18px 36px #bebebe, -18px -18px 36px #ffffff;
}
.container {
  padding: 5%;
}
.title {
  font-size: 3vw;
  color: #343a40;
}
.money-amount {
  font-size: 10vw;
  color: #343a40;
}
.tani {
  font-size: 5vw;
  margin-left: 3%;
}
.money-kinds-wrapper {
  padding: 5%;
  margin: 5%;
  border-radius: 27px;
  background: #e0e0e0;
  box-shadow: 18px 18px 36px #bebebe, -18px -18px 36px #ffffff;
}
.money-kinds {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  font-size: 0;
  width: 100%;
  justify-content: center;
}
.money-kind {
  flex-wrap: wrap;
}
.money-images {
  margin: 0 2vw 13vw;
}
.money-image {
  transition: transform 1s;
  position: relative;
  margin-bottom: -10vw;
}
</style>
