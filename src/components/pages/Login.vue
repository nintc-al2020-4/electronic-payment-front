<template>
  <div id="login" class="container">
    <h4 class="h4">ログイン</h4>
    <div class="form-group">
      <label class="text-left">
        Eメール
        <input v-model="email" type="email" maxlength="254" class="form-control" />
      </label>
    </div>
    <div class="form-group">
      <label class="text-left">
        パスワード
        <input v-model="password" type="password" pattern="^.+$" maxlength="72" class="form-control" />
      </label>
    </div>
    <button class="btn btn-dark" @click="onSubmit()">ログイン</button>
    <br />
    {{ errorMsg }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      errorMsg: ''
    }
  },
  created() {
    if (this.$store.state.token != null) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    async onSubmit() {
      await axios
        .post(
          '/login',
          {
            email: this.email,
            password: this.password
          },
          {
            baseURL: process.env.VUE_APP_API_URL_BASE,
            headers: {
              'Content-Type': 'application/json'
            },
            responseType: 'json'
          }
        )
        .then((response) => {
          const token = response.data.token
          this.$store.commit('setToken', token)
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          if (err.message === 'Request failed with status code 401') {
            this.errorMsg = 'Eメールもしくはパスワードが正しくありません'
          } else {
            this.errorMsg = 'ログインに失敗しました。再度お試しください。'
          }
          console.log(err)
        })
    }
  }
}
</script>

<style scoped></style>
