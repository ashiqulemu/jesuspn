<template>
  <div>
    <headers></headers>
    <sub-header :title="'title'" :sub-title="'sub-title'"></sub-header>
    <router-view/>
    <footers></footers>
  </div>
</template>
<script>

    import headers from './components/layout/header.vue'
    import footers from './components/layout/footer.vue'
    import subHeader from './components/layout/subHeader.vue'

  export default {
      components:{headers, footers, subHeader}
  }
</script>
<style lang="scss">
@import "styles/app.scss";
</style>
