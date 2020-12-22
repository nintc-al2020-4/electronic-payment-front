<template>
  <div id="charge">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                入金額
              </h4>
              <form>
                <div class="form-group">
                  <label>入金額を入力してください
                    <input v-model.number="number" type="number" class="form-control" min="0">
                  </label>
                  <p v-show="NotNumber" v-bind:style="styleObject">入力が数値ではありません</p>
                </div>
                <button type="submit" class="btn btn-dark">チャージ</button>
                <a href="/home" class="btn btn-dark text-light w-100 my-2" role="button">戻る</a>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="card h-100">
            <div class="card-body">
              <!-- このあたりが右半分 e.g.)現在の残高と追加した場合の残高を書くなど -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Charge",

  data() {
    return {
      number: null,
      styleObject: {
        color: 'red'
      }
    }
  },
  methods: {
    onSubmit() {
      // 実際はここでWeb APIを叩いて
      // フォームの内容をサーバに送信するはず
    }
  },
  computed: {
    NotNumber() {
      const value = Number(this.number);
      console.log(value);
      return Number.isNaN(value);
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 1rem 2%;
}

.table {
  table-layout: fixed;
}

.table tr td {
  vertical-align: middle;
}

.table tr td {
  word-wrap: break-word;
}

input[type="file"] {
  overflow: hidden;
}
</style>