<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  methods : {
    setTitleDescription(routeInstance) {
      // タイトルを設定
      const defaultTitle = "奈良高専電子決済";
      const title = routeInstance.meta.title
      if (title) {
        document.title = title + ' - ' + defaultTitle;
      } else {
        document.title = defaultTitle;
      }

      // メタタグdescription設定
      const desc = routeInstance.meta.description
      if (desc) {
        document.querySelector("meta[name='description']").setAttribute('content', desc)
      } else {
        document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
      }
    }
  },
  mounted(){
    const routeInstance = this.$route;
    this.setTitleDescription(routeInstance);
  },
  watch: {
    '$route' (routeInstance) {
      this.setTitleDescription(routeInstance);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
