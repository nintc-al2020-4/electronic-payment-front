<template>
  <div id="home">
    <div class="container">
      <a href="/wallet" class="card">
        <div class="card-body">
          <p class="card-text">
            残高を見る
          </p>
        </div>
      </a>
      <div class="row">
        <div class="col-md-6 col-12">
          <a href="/charge" class="btn btn-dark text-light w-100 my-2" role="button">
            チャージする
          </a>
        </div>
        <div class="col-md-6 col-12">
          <a href="pay" class="btn btn-dark text-light w-100 my-2" role="button">
            支払う(QRコード表示)
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>