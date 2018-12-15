<template>
    <div class="tripshare">

        <sub-header :title="'I am solo traveller'" :sub-title="'Book your social group trip to find the right travel companion.Feel you 100% secure and hassle-free.'"></sub-header>

                <div class="tripshare-content">

                    <div class="container-fluid part-one">
                        <div class="container">
                            <section class="part-one-content">
                                <div class="row">

                                    <h3 class="text-own-center col-md-12">What you will win?</h3>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Social</h5>
                                    </div>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Save Money</h5>
                                    </div>
                                    <div class="circle-div">
                                        <div class="circle-child-div"></div>
                                        <h5>Security</h5>
                                    </div>

                                </div>
                            </section>

                        </div>

                    </div>
                    <div class="part-two">
                        <div class="container">
                            <section>
                                <div class="row">
                                    <home-part6></home-part6>
                                </div>
                            </section>
                        </div>

                    </div>

                    <div class="part-three">
                        <div class="container">
                            <section>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="text-own-center">How it works</h3>
                                        <p class="text-own-center">Create your own trip or join already created.</p>
                                    </div>
                                </div>
                                <div class="how-works">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <i class="flaticon-booked"></i>
                                            <h5 class="text-own-center">Choose What To Do</h5>
                                            <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Accusantium alias
                                                culpa debitis doloribus ducimus eius libero nulla perferendis </span>
                                        </div>


                                        <div class="col-md-4">
                                            <i class="flaticon-booked"></i>
                                            <h5 class="text-own-center">Choose What To Do</h5>
                                            <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Accusantium alias
                                                culpa debitis doloribus ducimus eius libero nulla perferendis </span>
                                        </div>
                                        <div class="col-md-4">
                                            <i class="flaticon-booked"></i>
                                            <h5 class="text-own-center">Choose What To Do</h5>
                                            <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Accusantium alias
                                                culpa debitis doloribus ducimus eius libero nulla perferendis </span>
                                     </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>

                    <div class="part-four">
                        <div class="container">
                            <section>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="text-own-center">How it works</h3>
                                        <p class="text-own-center">Create your own trip or join already created.</p>
                                    </div>
                                </div>
                                <div class="how-works-part-2">

                                        <div class="how-works-part-left">
                                            <div>
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit.  </span>
                                            </div>


                                            <div>
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit.  </span>
                                            </div>
                                            <div >
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. </span>
                                            </div>
                                        </div>
                                        <div class="how-works-part-right">
                                            <div>
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. </span>
                                            </div>


                                            <div>
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit.  </span>
                                            </div>
                                            <div>
                                                <i class="flaticon-booked"></i>
                                                <span class="text-own-center">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. </span>
                                            </div>
                                        </div>

                                    <button class="btn btn-primary">ADD YOUR TRIP SHARING</button>
                                </div>
                            </section>

                        </div>

                    </div>

                </div>

            </div>
</template>

<script>
    import homePart6 from '../components/homePartials/homePart6.vue'
    export default{
        components:{homePart6},
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
        padding-bottom: 50px;
    }
    .part-one-content{
        padding-top: 20px;
        h3{
            padding:20px 0;
            color: #fff;
        }
        max-width: 960px;
        text-align: center;
        margin: 0 auto;
    }
    .circle-div{
        display: flex;
        flex-direction: column;
        flex:1;
        justify-content: center;
        align-items: center;
        background: #fff;
        padding: 30px;
        margin-right: 20px;
        h5{
            color: #fe575f;
            font-weight: 700;
            text-transform: uppercase;
            padding-top: 10px;
        }


    }
    .circle-child-div{
        display: flex;
        align-items: center;
        background: #fe575f;
        border-radius: 50%;
        width: 60px;
        height: 60px;


    }
    .part-three{
        background: #fafafa;
        justify-content: center;
        h3{
            padding-top: 50px;
        }
        p{
            padding-top: 10px;
        }
    }
    .how-works{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        text-align: center;
        padding-bottom: 70px;
        i{
            &:before{
                color: #fe575f;
                font-size:75px!important;
            }

        }
    }
    .part-four{
        h3{
            padding-top: 50px;
        }
        p{
            padding-top: 10px;
        }
    }
    .how-works-part-2{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin:50px;
        button{
          margin-top: 20px;
        }

    }
    .how-works-part-left{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-end;
        div{
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            i{
                &:before{
                    border: 3px solid #fe575f;
                    padding: 10px;
                    border-radius: 50%;
                    color: #fe575f;
                    font-size:50px!important;
                }

            }
        }


    }
    .how-works-part-right{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            i{
                &:before{
                    border: 3px solid #fe575f;
                    padding: 10px;
                    border-radius: 50%;
                    color: #fe575f;
                    font-size:50px!important;
                }

            }
        }
    }

</style>