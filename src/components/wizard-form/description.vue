<template>
    <div>
        <div class="row description-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="row description">
                        <div class="col-md-12">
                            <h5>Description</h5>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Listing Name</label>
                                <input  name="rooms" type="text" class="form-control" placeholder="Be clear and descriptive">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>About Your Home</label>
                                <textarea  name="rooms" type="text"
                                           rows="5"
                                           class="form-control"
                                           placeholder="Put information about what makes your place uique...">

                                </textarea>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Check In Form</label>
                                <datepicker :input-class="'form-control'" ></datepicker>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Check In To</label>
                                <datepicker :input-class="'form-control'" ></datepicker>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Check Out To</label>
                                <datepicker :input-class="'form-control'" ></datepicker>
                            </div>
                        </div>
                    </div>

                    <div class="row your-service">
                        <div class="col-md-12">
                            <h5>Your Service</h5>
                            <p>What service Do You Offer?</p>
                            <textarea class="form-control"
                                      rows="3"
                                      placeholder="E.g:cleaning, wifi,transportation,laundry or other services that you can offer to travelers...">

                            </textarea>
                            <p>You can add more <a href="#">details</a> to tell travelers about your services space and hosting</p>
                        </div>



                    </div>

                    <div class="row form-button">
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(2)">Previous</button>
                        <button class="btn btn btn-primary" type="submit" @click.prevent="">Save</button>
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(4)">Next</button>
                    </div>

                </form>


            </div>
            <div class="col-md-4">
               
                    <div class="col-md-12 basic-right">
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
</template>

<script>
    import Datepicker from 'vuejs-datepicker'

    export default{
        components:{Datepicker},
        data(){
            return{


            }

        },
        created(){
            this.$parent.title='Tell travelers why your accommodation is unique',
            this.$parent.subTitle='Describe how your accommodation is properly for social trips.'

        }
    }
</script>
<style lang="scss" scoped>
    
    .basic-right{
        border: 1px solid #EAEAEA;
        padding: 20px 30px;
        margin-bottom: 30px;
        @media (min-width: 768px){
            margin-left: 15px;
        }
    }

    .description-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .description{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .your-service{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-bottom: 20px;
        a{
            color: #fe575f;
            text-decoration: underline;
        }

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
    .form-btn{
        margin: 40px 0 40px -30px;
        button{
            margin-right: 20px;
            padding: 5px 40px;
        }
    }

</style>
