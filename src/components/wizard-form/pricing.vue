<template>
    <div>
        <div class="row pricing-form">
            <div class="col-md-8">
                <form class="form-horizontal">
                    <div class="row pricing">
                        <div class="col-md-12">
                            <h5>Room 1</h5>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Nightly Price</label>
                                <div class="price-input">
                                    <select>
                                        <option>&euro;</option>
                                        <option>$</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Discount Per Week</label>
                                <div class="price-input">
                                    <select>
                                        <option>%</option>
                                        <option>&euro;</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Discount Per Month</label>
                                <div class="price-input">
                                    <select>
                                        <option>%</option>
                                        <option>&euro;</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>

                        <a href="#" class="view-more">+Add Custom Dates</a>

                    </div>

                    <div class="row pricing">
                        <div class="col-md-12">
                            <h5>Room 2</h5>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Nightly Price</label>
                                <div class="price-input">
                                    <select>
                                        <option>&euro;</option>
                                        <option>$</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Discount Per Week</label>
                                <div class="price-input">
                                    <select>
                                        <option>%</option>
                                        <option>&euro;</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Discount Per Month</label>
                                <div class="price-input">
                                    <select>
                                        <option>%</option>
                                        <option>&euro;</option>
                                    </select>
                                    <input type="number" name="night_price"/>
                                </div>

                            </div>
                        </div>

                        <a href="#" class="view-more">+Add Custom Dates</a>

                    </div>
                       <a href="#">You can offer discounts for longer stays by setting weekly and monthly prices.</a>

                    <div class="row form-button">
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(6)">Previous</button>
                        <button class="btn btn btn-primary" type="submit" @click.prevent="">Save</button>
                        <button class="btn btn btn-default" type="submit" @click.prevent="$parent.goStep(8)">Next</button>
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

    .pricing-form{
        .form-group{
            .btn.btn-primary{
                margin-left: -31px;
                margin-bottom: 50px;
            }
        }
        a{
            text-decoration: underline;
            color: #8e8e8e;
            margin-left: -18px;
        }

    }
    .pricing{
        border: 1px solid #e9e9e9;
        padding: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
        a{
            color: #fe575f;
            margin-left:36px!important;
        }
    }
    .price-input{
        display: flex;
        select{
            background:#fe575f;
            color: #fff;
            padding-left:10px;
            font-size: 25px;
            border: none;
        }
        select option{
            &:hover{
                background: black!important;
            }
        }
        select option:hover,
        select option:focus,
        select option:active {
            background: linear-gradient(#000000, #000000);
            background-color: #000000 !important; /* for IE */
            color: #ffed00 !important;
        }

        select option:checked {
            background: linear-gradient(#d6d6d6, #d6d6d6);
            background-color: #d6d6d6 !important; /* for IE */
            color: #000000 !important;
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
