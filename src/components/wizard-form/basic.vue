<template>
    <div>
        <div class="row basic-form">
            <div class="col-md-8">
                <form class="form-horizontal" @submit.prevent="post()">
                    <div class="row accommodation-space">
                        <div class="col-md-12">
                            <h5>Accommodation Space</h5>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Rooms</label>
                                <input  name="rooms" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Shared Bathrooms</label>
                                <input type="number"  name="shared_bathrooms" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Accommodates</label>
                                <input type="number"  name="accommodate" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row listing">
                        <div class="col-md-12">
                            <h5>Listing</h5>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Property Type</label>
                                <select name="property_type" class="form-control">
                                    <option value="apartment">Apartment</option>
                                    <option value="new apartment">New Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Country</label>
                                <select name="country" class="form-control">
                                    <option value="spain">Spain</option>
                                    <option value="bangladesh">Bangladesh</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>City</label>
                                <select name="city" class="form-control">
                                    <option value="gran canaria">Gran Canaria</option>
                                    <option value="new city">new city</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <button class="btn btn btn-primary" type="submit">Save & Next</button>
                        </div>
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

        }
    }
</script>
<style lang="scss" scoped>

    .basic-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }

    }
    .accommodation-space{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .listing{
        border: 1px solid #e9e9e9;
        padding: 20px;
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

</style>