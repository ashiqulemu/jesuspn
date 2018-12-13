<template>
    <div>
        <div class="row amenities-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="row amenities-content">
                        <div class="col-md-12">
                            <h5>Common Amenities <span class="text-primary">0</span></h5>
                            <div class="amenities">
                                <div class="amenities-box is-active">
                                    <div></div>
                                    <span>Tv Set</span>
                                </div>
                                <div class="amenities-box">
                                    <div></div>
                                    <span>Hangers</span>
                                </div>
                                <div class="amenities-box">
                                    <div></div>
                                    <span>Closet</span>
                                </div>
                                <div class="amenities-box">
                                    <div></div>
                                    <span>Mirror</span>
                                </div>
                                <div class="amenities-box">
                                    <div></div>
                                    <span>Reading Lamp</span>
                                </div>
                            </div>


                        </div>
                        <a href="#" class="view-more">View More..</a>

                    </div>

                    <div class="col-md-12 form-btn">
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(4)">Previous</button>
                        <button class="btn btn btn-primary" type="submit" @click.prevent="">Save</button>
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(6)">Next</button>
                    </div>

                </form>


            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-12 basic-side">
                        <h5>Help Assistance</h5>
                        <h6>Easy to use</h6>
                        <p>Just a few steps add your accommodation</p>
                        <h6>Earn extra money</h6>
                        <p>You could fill your empty rooms which you have not occupied from others sites still 100% occupancy.</p>
                        <h6>Easy to use</h6>
                        <p>Service fee for single-listing: 0% commission.</p>
                    </div>
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

        },
        created(){
            this.$parent.title='Please give us more details about rooms',
                this.$parent.subTitle='Describe your rooms details to help travelers choice'

        }
    }
</script>
<style lang="scss" scoped>

    .amenities-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .amenities-content{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .basic-side{
        margin-top:40px;
        border: 1px solid #e9e9e9;
        margin-left: 20px;
        padding: 20px;
        background: #fafafa;
        p{
            font-size: 12px;
        }
    }
    .amenities{
        display: flex;
        flex-direction: row;
        .amenities-box{
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ebebeb;
            padding: 20px 0;
            margin-right: 20px;
            div{
                height: 40px;
                width: 40px;
                background: #aaaaaa;
            }
            &.is-active{
                border: 1px solid #fe575f;
            }

        }
        .amenities-box:last-child{
            margin-right: 0;
        }



    }
    .form-btn{
        margin: 40px 0 40px -30px;
        button{
            margin-right: 20px;
            padding: 5px 40px;
        }
    }

</style>