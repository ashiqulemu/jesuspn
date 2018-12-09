<template>
  <div>
    <headers ref="headers" :style="{display:showHeader}"></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>
<script>

    import headers from './components/layout/header.vue'
    import footers from './components/layout/footer.vue'

  export default {
      components:{headers, footers},
      data(){
          return {
              showHeader:''
          }
      },
      created(){
          if(this.$route.fullPath=='/'){
              this.showHeader='none'
          }
      },
      watch: {
          //eslint-disable-next-line
          '$route' (to, from) {
              if(to.name=='home'){
                  this.showHeader='none'
              }else{
                  this.showHeader=''
              }
          }
      }
  }
</script>
<style lang="scss">
@import "styles/app.scss";
</style>
