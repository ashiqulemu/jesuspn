<template>
    <div class="centering">
        <img :src="image" v-if="image">
        <h1>{{title}}</h1>
        <p class="text-white">{{subTitle}}</p>
    </div>
</template>
<script>
    export default {
        props:['subTitle', 'title', 'image']
    }
</script>
<style>

</style>