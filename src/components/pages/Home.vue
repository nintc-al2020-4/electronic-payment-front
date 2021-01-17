<template>
  <div id="home">
    <div class="container">
      <router-link to="/wallet" class="card">
        <div class="card-body">
          <p class="card-text">
            残高を見る
          </p>
        </div>
      </router-link>
      <div class="row">
        <div class="col-md-6 col-12">
          <router-link to="/charge" class="btn btn-dark text-light w-100 my-2" role="button">
            チャージする
          </router-link>
        </div>
        <div class="col-md-6 col-12">
          <router-link to="/pay" class="btn btn-dark text-light w-100 my-2" role="button">
            支払う(QRコード表示)
          </router-link>
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