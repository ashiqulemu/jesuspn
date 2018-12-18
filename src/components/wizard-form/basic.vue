<template>
    <div class="row">
        <div class="col-md-8">
            <form class="form-horizontal" @submit.prevent="post()">
                <div class="row accommodation-space">
                    <div class="col-md-12">
                        <h5>Accommodation Space</h5>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Rooms</label>
                            <select name="rooms" class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Shared Bathrooms</label>
                            <select name="bathrooms" class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Accommodates</label>
                            <select name="accommodates" class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row listing">
                    <div class="col-md-12">
                        <h5>Listing</h5>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Property Type</label>
                            <select name="property_type" class="form-control">
                                <option value="apartment">Apartment</option>
                                <option value="new apartment">New Apartment</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Country</label>
                            <select name="country" class="form-control">
                                <option value="spain">Spain</option>
                                <option value="bangladesh">Bangladesh</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>City</label>
                            <select name="city" class="form-control">
                                <option value="gran canaria">Gran Canaria</option>
                                <option value="new city">new city</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="rounded pl-5 pr-5 btn btn btn-primary uppercase" type="submit" @click.prevent="$parent.goStep(2)">Save & Next</button>
                        <br>
                        <br>
                        <br>
                        <br>
                    </div>
                </div>
            
            </form>
        
        
        </div>
        <div class="col-md-4">
                <div class="col-md-12 basic-right">
                    <h5 class="pb-3">Help Assistance</h5>
                    <h6 class="pb-2">Easy to use</h6>
                    <p>Just a few steps add your accommodation</p>
                    <h6>Earn extra money</h6>
                    <p >You could fill your empty rooms which you have not occupied from others sites still 100% occupancy.</p>
                    <h6>Without service Fee</h6>
                    <p>Service fee for single-listing: 0% commission.</p>
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
            this.$parent.title='Help travelers find the right home',
            this.$parent.subTitle='Peer2travel lets you make money renting out your place.'

        }
    }
</script>
<style lang="scss" scoped>
    .basic-right{
        border: 1px solid #EAEAEA;
        padding: 20px 30px;
    }
    .basic-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .accommodation-space{
        border: 1px solid #EAEAEA;
        padding: 20px;
        margin-bottom: 30px;
    }
    .listing{
      @extend .accommodation-space;
    }
    .basic-side{
        border: 1px solid #e9e9e9;
        margin-left: 20px;
        padding: 20px;
        background: #fafafa;
        p{
            padding-top: 0;
            padding-bottom: 5px;
            font-size: 13px;
        }
    }

    .form-group{
        label{
            color: #505050;
            font-weight: 500;
        }
    }

</style>
