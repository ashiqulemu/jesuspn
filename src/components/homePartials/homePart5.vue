<template>
    <div class="home-part5 d-flex flex-column align-items-center justify-content-center flex-wrap">
    <div>
        <i class="fa fa-play btn-circle-primary"></i>
    </div>
    <div >Don't you feel llke her?</div>
    <div >At this moment you don't worry about that.</div>
    </div>
</template>

<script>
    export default {
        name: "home-part5"
    }
</script>

<style scoped lang="scss">
.home-part5{
    min-height: 350px;
    padding: 50px 0;
    position: relative;
    background-image: url("../../../src/assets/images/video-background.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    .btn-circle-primary{
        color: #fff;
        padding: 20px 22px;
        font-size: 21px;
        border-radius: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        background: #FE575F;
    }
    div{
        &:nth-child(2){
            font-size: 25px;
            color: #3e3d3d;
            padding: 10px 0;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
        }
        &:nth-child(3){
            font-size: 14px;
            color:#4C4C4C;
            font-weight: 500;
            text-align: center;
        }
    }
}
</style>
