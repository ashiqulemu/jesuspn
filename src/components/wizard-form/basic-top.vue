<template>
   
       <div class="listing row">
           <div class="items">
               <span class="active">1</span>
               <p>Basic</p>
           </div>
           <div class="items">
               <span>2</span>
               <p>Room Details</p>
           </div>
           <div class="items">
               <span>3</span>
               <p>Description</p>
           </div>
           <div class="items">
               <span>4</span>
               <p>Location</p>
           </div>
           <div class="items">
               <span>5</span>
               <p>Amenities</p>
           </div>
           <div class="items">
               <span>6</span>
               <p>Photos</p>
           </div>
           <div class="items">
               <span>7</span>
               <p>Pricing</p>
           </div>
           <div class="items">
               <span>8</span>
               <p>Calender</p>
           </div>
           <div class="items">
               <span>9</span>
               <p>Terms</p>
           </div>
       </div>
 
</template>

<script>
    export default{
        data(){
            return{
                oneIsActive:false,
                twoIsActive:false,
                threeIsActive:false,
                fourIsActive:false,
                fiveIsActive:false,
                sixIsActive:false,
                sevenIsActive:false,
                eightIsActive:false,
                nineIsActive:false,

            }
        
        }
    }
</script>

<style lang="scss" scoped>
    .listing{
        overflow: hidden;
        display: flex;
        background:#F7F7F7;
        justify-content: space-between;
        padding-left: 24px ;
        padding-bottom:20px;
        padding-right: 0;
        margin-top: 60px;
        margin-bottom: 60px;
        flex-wrap: wrap;
        padding-top:30px;
        .items{
            flex: 1;
            min-width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            margin-bottom: 10px;
            position: relative;
            
        &:not(:last-child){
            &:after{
                content: '';
                height: 3px;
                width: 100%;
                background: white;
                position: absolute;
                top: 12px;
                left: 60px;
            
                @media (max-width: 768px){
                    display: none;
                }
               
            }
        }
            span{
                &.active{
                    background:#FE575F ;
                    color: #FFF;
                }
                position: relative;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                text-align: center;
                color: #545454;
                border-radius: 100%;
                font-size: 14px;
                font-weight: 500;
                height: 25px;
                background: #FFFFFF;
            }
            p{
                font-size: 13px;
                padding-top: 6px;
                color: #212121;
                font-weight: 500;
                margin: 0;
            }
        }
    }
</style>
