<template>
    <div>
        <div class="row location-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="row location">
                        <div class="col-md-12">
                            <h5>Location</h5>
                            <img src="../../../src/assets/images/location.jpg"/>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Search Address</label>
                                <input  name="address" type="text" class="form-control" placeholder="Type to search">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Floor</label>
                                <input  name="floor" type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Block</label>
                                <input  name="blocm" type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>House / Property Number and Name</label>
                                <input  name="house_property" type="text" class="form-control" placeholder="Type to search">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nearby</label>
                                <input  name="near_by" type="text" class="form-control" placeholder="Type to search">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nearby</label>
                                <input  name="near_by_another" type="text" class="form-control" placeholder="Gran Canaria" disabled>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Country</label>
                                <input  name="country" type="text" class="form-control" placeholder="Spain" disabled>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Pincode</label>
                                <input  name="pin_code" type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                    </div>
                    <div class="row form-button">
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(3)">Previous</button>
                        <button class="btn btn btn-primary" type="submit" @click.prevent="">Save</button>
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(5)">Next</button>
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

    .location-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .location{
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
        margin: 40px 0 40px -30px;
        button{
            margin-right: 20px;
            padding: 5px 40px;
            font-size: 14px;
            font-weight: 500;
            color: #343434;
        }
    }

</style>
