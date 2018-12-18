<template>
    <div>
        <div class="row room-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="row room-one">
                        <div class="col-md-12">
                            <h5>Room 1</h5>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Room Type</label>
                                <select name="room_type" class="form-control">
                                    <option value="">Select</option>
                                    <option value="room">Room</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Bed Type</label>
                                <select name="bed_type" class="form-control">
                                    <option value="">Select</option>
                                    <option value="bed">Bed</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Private Bathroom</label>
                                <select name="private_bathroom" class="form-control">
                                    <option value="">Select</option>
                                    <option value="bathroom">Bathroom</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <hr>
                            <h5 class="pb-3 pt-1">Room Amenities <span class="text-primary">0</span></h5>
                            <div class="amenities">
                               <div class="amenities-box">
                                   <input class="ameniti-select-box" type="checkbox" name="" id="tv-set">
                                   <label for="tv-set">Tv Set</label>
                               </div>
                               <div class="amenities-box">
                                   <input class="ameniti-select-box" type="checkbox" name="" id="hangers">
                                   <label for="hangers">Hangers</label>
                               </div>
                               <div class="amenities-box">
                                   <input class="ameniti-select-box" type="checkbox" name="" id="closet">
                                   <label for="closet">Closet</label>
                               </div>
                               <div class="amenities-box">
                                   <input class="ameniti-select-box" type="checkbox" name="" id="mirror">
                                   <label for="mirror">Mirror</label>
                               </div>
                               <div class="amenities-box">
                                   <input class="ameniti-select-box" type="checkbox" name="" id="reading-lamp">
                                   <label for="reading-lamp">Reading Lamp</label>
                               </div>
                            </div>


                        </div>
                        <a href="#" class="view-more">View More..</a>
                    </div>

                    <div class="col-md-12 form-btn d-flex flex-wrap">
                       <button class="btn btn btn-default rounded" type="submit" @click.prevent="$parent.goStep(1)">Previous</button>
                       <button class="btn btn btn-primary rounded text-white" type="submit" @click.prevent="">Save</button>
                       <button class="btn btn btn-default rounded" type="submit" @click.prevent="$parent.goStep(3)">Next</button>
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
    
    .form-group{
        label{
            color: #505050;
            font-weight: 500;
        }
    }

    .basic-right{
        border: 1px solid #EAEAEA;
        padding: 20px 30px;
        margin-bottom: 30px;
        @media (min-width: 768px){
            margin-left: 15px;
        }
    }

    .room-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }
    }
    .room-one{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-bottom: 20px;
        .view-more{
            color:#FE575F ;
            padding-left: 15px;
        }
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
    .amenities{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 768px){
            justify-content: center;
            align-items: center;
        }
        .amenities-box{
            @media (max-width: 768px){
                margin-right:16px;
            }
            label{
                font-size: 14px;
                color:#505050;
                font-weight: 500;
            }
            width: 80px;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 119px;
            border: 1px solid #e2e2e2;
            padding-top: 32px;
            padding-bottom: 13px;
            padding-left: 13px;
            padding-right: 13px;
            min-width: 120px;
            margin-bottom: 16px;
            .ameniti-select-box{
                -webkit-appearance: none;
                height: 50px;
                width:50px;
                background: #AAAAAA;
                margin-bottom: 10px;
            }
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
