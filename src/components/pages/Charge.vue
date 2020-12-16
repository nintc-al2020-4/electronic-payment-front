<template>
  <div id="Charge">
    <div class="container-fluid">
      <table class="table table-bordered">
        <colgroup>
          <col width="50%">
          <col width="50%">
        </colgroup>
        <thead>
          <tr>
            <th>入金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="form-group mb-0">
                <label>入金額を入力してください
                  <input v-model.number="number" type="number" class="form-control" min="0">
                </label>
                <p v-show="NotNumber" v-bind:style="styleObject">入力が数値ではありません</p>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
      <button type="submit">チャージ</button>
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