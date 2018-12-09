<template>
  <div class="home">
      <!--tops-->
      <home-header></home-header>

      <home-part2></home-part2>

      <home-part3></home-part3>

      <home-part4></home-part4>

      <home-part5></home-part5>
      
      <home-part6></home-part6>
      

  </div>
</template>
<style lang="scss" scoped>
    .home{

    }
</style>

<script>
    import homeHeader from '../components/homePartials/homeHeader.vue'
    import homePart2 from '../components/homePartials/homePart2.vue'
    import homePart3 from '../components/homePartials/homePart3.vue'
    import homePart4 from '../components/homePartials/homePart4.vue'
    import homePart5 from '../components/homePartials/homePart5.vue'
    import homePart6 from '../components/homePartials/homePart6.vue'
    // @ is an alias to /src
    export default {
        name: 'home',
        components:{homeHeader, homePart2, homePart3, homePart4, homePart5, homePart6}
    }
</script>
