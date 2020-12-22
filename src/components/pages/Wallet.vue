<template>
    <div id="Wallet">
        <div class="continer">
            <div class="title">Wallet</div>
            <div class="money">{{ money }}円</div>
            <form @submit.prevent="addMoney">
                <input type="text" v-model="money">
                <input type="submit" value="add">
            </form>
            <ul type="none">
                <li v-for="item in list" :key="item.id">
                    <ul type="none">
                        <li v-for="n of item.amount" :key="n">
                            <img :src="item.image"/>
                        </li>
                    </ul>
                </li>
            </ul>
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
            { amount: 0, name: 'tenthousand', image: require('../../assets/10000.png')},
            { amount: 0, name: 'fivethousand', image: require('../../assets/5000.png')},
            { amount: 0, name: 'thousand', image: require('../../assets/1000.png')},
            { amount: 0, name: 'fivehundred', image: require('../../assets/500.png')},
            { amount: 0, name: 'hundred', image: require('../../assets/100.png')},
            { amount: 0, name: 'fifty', image: require('../../assets/50.png')},
            { amount: 0, name: 'ten', image: require('../../assets/10.png')},
            { amount: 0, name: 'five', image: require('../../assets/5.png')},
            { amount: 0, name: 'one', image: require('../../assets/1.png')}
        ]
      }
  },
  methods: {
    addMoney: function() {
        var kinds = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1]
        var t = this.money
        for (let i=0; i<kinds.length; i++){
            this.list[i].amount = Math.floor(t / kinds[i])
            t = t % kinds[i]
        }
    }
  }
}
</script>
<style scoped>
img {
    width: 30%
}
</style>