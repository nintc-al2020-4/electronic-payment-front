<template>
<title>Charge</title>
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
              <label>入金額を入力してください</label>
              <input v-model.number="number" type="int" class="form-control">
              <p v-show="NotNumber" v-bind:style="styleObject">入力が数値ではありません</p>
            </div>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
    <button type="submit">チャージ</button>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://unpkg.com/vue"></script>
</template>

<script>
export default {
  name: "Charge"
}

var app = new Vue({
  el: '#Charge',
  data: {
    number: null,
    styleObject: {
       color: 'red'
    }
  },
  methods: {
    onSubmit: function () {
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
})
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