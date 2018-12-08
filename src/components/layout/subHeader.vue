<template>
    <div class="centering">
        <h1>{{subTitle}}</h1>
        <p class="text-white">{{title}}</p>
    </div>
</template>
<script>
    export default {
        props:['subTitle', 'title']
    }
</script>
<style>
.centering{
    background: black;
    color: white;
    display: flex;
    height: 198px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>