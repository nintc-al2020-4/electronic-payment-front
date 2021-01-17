<template>
  <header class="pb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">トップページ</router-link>
      <button aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="ナビゲーションの切替" class="navbar-toggler" data-target="#navbarNavAltMarkup" data-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/wallet">残高確認</router-link>
          <router-link class="nav-item nav-link active" to="/charge">チャージ</router-link>
          <router-link class="nav-item nav-link active" to="/pay">支払い</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
