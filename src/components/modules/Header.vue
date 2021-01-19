<template>
  <header class="pb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">トップページ</router-link>
      <button
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="ナビゲーションの切替"
        class="navbar-toggler"
        data-target="#navbarNavAltMarkup"
        data-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
        <div v-if="isLoggedIn()" class="navbar-nav mr-auto">
          <router-link class="nav-item nav-link active" to="/wallet">残高確認</router-link>
          <router-link class="nav-item nav-link active" to="/charge">チャージ</router-link>
          <router-link class="nav-item nav-link active" to="/pay">支払い</router-link>
        </div>
        <div class="navbar-nav ml-auto">
          <a v-if="isLoggedIn()" class="nav-item nav-link active" href="#" @click="logout()">ログアウト</a>
          <router-link v-else class="nav-item nav-link active" to="/login">ログイン</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  methods: {
    isLoggedIn() {
      return this.$store.state.token != null
    },
    logout() {
      axios
        .delete('/logout', {
          baseURL: process.env.VUE_APP_API_URL_BASE,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.$store.state.token
          },
          responseType: 'json'
        })
        .then(() => {
          this.$store.commit('setToken', null)

          this.$router.push({ name: 'login' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped></style>
