<template>
  <div id="Wallet">
    <div class="container">
      <div class="top">
        <div class="title">WALLET</div>
        <div class="money-amount">{{ money }}<span class="tani">YEN</span></div>
      </div>
      <div class="money-kind">
        <ul class="money-kind-ul">
          <li v-for="item in list" :key="item.id" class="money-kind-li">
            <ul class="amount-ul">
              <transition-group name="flip" mode="out-in" appear>
                <li v-for="n of item.amount" :key="n.key" class="amount-li">
                  <img :src="item.image" :alt="item.name"/>
                </li>
              </transition-group>
            </ul>
          </li>
        </ul>
      </div>
      <a href="/" class="btn btn-dark" role="button">戻る</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wallet",

  data() {
    return {
      money: 0,
      list: [
        { amount: 0, name: 'tenthousand', image: require('@/assets/10000.png')},
        { amount: 0, name: 'fivethousand', image: require('@/assets/5000.png')},
        { amount: 0, name: 'thousand', image: require('@/assets/1000.png')},
        { amount: 0, name: 'fivehundred', image: require('@/assets/500.png')},
        { amount: 0, name: 'hundred', image: require('@/assets/100.png')},
        { amount: 0, name: 'fifty', image: require('@/assets/50.png')},
        { amount: 0, name: 'ten', image: require('@/assets/10.png')},
        { amount: 0, name: 'five', image: require('@/assets/5.png')},
        { amount: 0, name: 'one', image: require('@/assets/1.png')}
      ]
    }
  },
  methods: {
    async init() {
      const balance = await this.getBalance();
      this.money = balance;
      this.showBalance(balance);
    },
    async getBalance() {
      await this.$store.dispatch('retrieveBalance');
      return this.$store.state.balance;
    },
    showBalance(balance) {
      const kinds = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

      kinds.reduce((tmp, value, i) => {
        this.list[i].amount = Math.floor(tmp / value)
        return tmp % kinds[i]
      }, balance)
    }
  },
  created() {
    this.init();
  }
}
</script>
<style scoped>
img {
    height: 13vw;
    padding: 2%;
}
.top {
    /* background-color:#939597; */
    padding: 5%;
    margin: 5%;
    /* border-radius: 2vw */
    border-radius: 27px;
    background: #e0e0e0;
    box-shadow:  18px 18px 36px #bebebe,
                -18px -18px 36px #ffffff;
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
    color:#343a40;
}
.tani{
    font-size: 5vw;
    margin-left: 3%;
}
.money-kind {
    /* background-color:#f0eee993; */
    padding: 5%;
    margin: 5%;
    /* border-radius: 2vw; */
    border-radius: 27px;
    background: #e0e0e0;
    box-shadow:  18px 18px 36px #bebebe,
                -18px -18px 36px #ffffff;
}
.money-kind-ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    font-size:0;
    width: 100%;
    justify-content: center;
}
.money-kind-li {
    flex-wrap: wrap;
}
.amount-ul{
    padding-left:0;
}
.amount-li{
    padding-top: -100vw;
    padding-bottom: -200vw;
    transition: transform 1s;


}

/* Transition */
.flip-move {
    transition: transform 1s;
}
.flip-enter-active {
    opacity: 0;
    transform: translateZ(30px);
    transition: opacity 0.5s, transform 0.5s;
}
.flip-enter-to {
    opacity: 1;
}
.flip-leave-active {
    opacity: 0;
    transform: translateZ(30px);
    transition: opacity 0.5s, transform 0.5s;
    position: absolute;
}
.flip-leave-to {
    opacity: 0;
    transform: translateZ(30px);
}


</style>
