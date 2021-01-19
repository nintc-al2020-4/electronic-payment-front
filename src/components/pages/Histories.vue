<template>
  <div id="histories" class="container"></div>

  <!-- Lint対策 -->
  <Histories_History></Histories_History>
</template>

<script>
import Histories_History from '@/components/parts/Histories_History'

export default {
  name: 'Histories',
  components: {
    Histories_History
  }
}
</script>

<style scoped></style>
