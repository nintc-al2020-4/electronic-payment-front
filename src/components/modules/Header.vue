<template>
  <header class="pb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="/">トップページ</a>
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
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/wallet">残高確認</a>
          <a class="nav-item nav-link active" href="/charge">チャージ</a>
          <a class="nav-item nav-link active" href="/pay">支払い</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped></style>
