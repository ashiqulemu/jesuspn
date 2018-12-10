<template>
    <div class="basic">

        <sub-header :title="'Help travelers find the right home'" :sub-title="'Peer2travel lets you make money renting out your place'"></sub-header>

        <div class="container">
            <basic-top></basic-top>
            <basic></basic>

        </div>

    </div>
</template>

<script>
    import BasicTop from './../components/wizard-form/basic-top.vue'
    import Basic from './../components/wizard-form/basic.vue'

    export default{
        components:{
            Basic,
            BasicTop
        },
        data(){
            return{

            }

        }
    }
</script>
<style lang="scss" scoped>

    .basic-content{
        margin-top:50px;
    }



</style>