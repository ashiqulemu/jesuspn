<template>
  <div>
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>
<script>

    import headers from './components/layout/header.vue'
    import footers from './components/layout/footer.vue'

  export default {
      components:{headers, footers}
  }
</script>
<style lang="scss">
@import "styles/app.scss";
</style>
