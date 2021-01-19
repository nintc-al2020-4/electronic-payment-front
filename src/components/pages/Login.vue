<template>
  <div id="login" class="container">
    <h4 class="card-title">ログイン</h4>
    <div class="form-group">
      <label>
        Eメール
        <input v-model="mailaddress" type="email" pattern=".+" maxlength="72" class="form-control" />
      </label>
      <br />
      <label>
        パスワード
        <input v-model="password" type="password" pattern="[!-~]+" maxlength="72" class="form-control" />
      </label>
      <br />
      <button class="btn btn-dark" @click="onSubmit()">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      mailaddress: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      //
    },
    //Eメールとパスワードが適切に入力されているか
    isValid() {
      return false
    }
  }
}
</script>

<style scoped></style>
