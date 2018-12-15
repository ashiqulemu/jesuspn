<template>
    <div class="tripshare">

        <sub-header :title="'I am solo traveller'" :sub-title="'Book your social group trip to find the right travel companion.Feel you 100% secure and hassle-free.'"></sub-header>

                <div class="tripshare-content">

                    <div class="container-fluid part-one">
                        <div class="container">
                            <section class="part-one-content">
                                <div class="row">

                                    <h3 class="text-own-center col-md-12">What you will win?</h3>
                                        <i class="flaticon-wifi"></i>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Social</h5>
                                        <i class="flaticon-back"></i>
                                    </div>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Social</h5>
                                    </div>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Social</h5>
                                    </div>

                                </div>
                            </section>
                        </div>

                    </div>

                </div>

            </div>
</template>

<script>
    export default{
        data(){
            return{


            }

        }
    }
</script>
<style lang="scss" scoped>
    .tripshare{
        min-height: 550px;
    }
    .tripshare-content{

    }
    .part-one{
        background: #fe575f;
        padding-bottom: 20px;
    }
    .part-one-content{
        padding-top: 20px;
        h3{
            padding:10px;
            color: #fff;
        }
        max-width: 960px;
        text-align: center;
        margin: 0 auto;
    }
    .circle-div{
        display: flex;
        flex:1;
         background: #fff;
          padding: 50px;

    }
    .circle-child-div{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fe575f;
        border-radius: 50%;
        padding: 20px;

    }

</style>