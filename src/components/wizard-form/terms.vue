<template>
    <div>
        <div class="row terms-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="terms">
                        <div class="row">
                            <div class="col-md-12">
                                <h5>Terms</h5>
                                <p>Calender goes here...</p>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label>Cancellation Policy </label>
                                    <select class="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Refund Days</label>
                                    <input  name="refund_fund" type="text" class="form-control" placeholder="0" disabled>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Legal Accomodation Code</label>
                                    <input  name="legal_accomodation_code" type="text" class="form-control" placeholder="Property Code">
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Accommodation Evidence</label>
                                    <input  name="accommodation_file" type="file" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row form-button">
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(8)">Previous</button>
                        <button class="btn btn btn-primary" type="submit" @click.prevent="">Save</button>
                        <!--<button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(7)">Next</button>-->
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

    .terms-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .terms{
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
    .form-btn{
        margin: 40px 0 40px -16px;
        button{
            margin-right: 20px;
            padding: 5px 40px;
        }
    }

</style>
