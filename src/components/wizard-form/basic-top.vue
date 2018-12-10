<template>
    <div>
        <div class="row justify-content-center basic-content-top">
            <ul>
                <li>
                    <span class="rounded-icon active">1</span>
                    <p>Basic</p>
                </li>
                <li>
                    <span  class="rounded-icon">2</span>
                    <p>Room Details</p>
                </li>
                <li>
                    <span  class="rounded-icon">3</span>
                    <p>Description</p>

                </li>
                <li>
                    <span  class="rounded-icon">4</span>
                    <p>Location</p>

                </li>
                <li>
                    <span  class="rounded-icon">5</span>
                    <p>Amenities</p>

                </li>
                <li>
                    <span  class="rounded-icon">6</span>
                    <p>Photos</p>

                </li>
                <li>
                    <span  class="rounded-icon">7</span>
                    <p>Pricing</p>

                </li>
                <li>
                    <span  class="rounded-icon">8</span>
                    <p>Calendar</p>

                </li>
                <li>
                    <span  class="rounded-icon">9</span>
                    <p>Terms</p>
                </li>
            </ul>

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

    .basic-content-top{
        margin-left: 10px;
        margin-top:50px;
        ul{
            padding:20px;
            display: flex;
            text-align: center;
            background: #f7f7f7;
            li{
                display: inline;
                padding-right: 28px;
                font-size: 10px;
                font-weight: 400;

            }
            li:last-child{
                padding-right: 0;
            }
            p{
                margin: 0;
                color: black;
                min-width: 100px;
            }
        }
        .rounded-icon{
            padding: 7px 10px!important;
            height: 25px;
            width: 25px;
            background: #fff;
            color:#000;
            &.active{
                background: #fe575f!important;
                color: #fff;
            }
        }

    }



</style>