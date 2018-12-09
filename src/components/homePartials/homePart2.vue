<template>
    <section class="part2 container-fluid">
        <div class="row">
            <div class="col">
                <div class="box">
                    <h1>CONCURSO</h1>
                    <P class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet aperiam atque debitis eos e
                        rror est laboriosam nemo nostrum
                    </P>
                    <button class="btn btn btn-primary">
                        Start the trip
                    </button>
                    <a href="" class="link">
                        Entre más compartas más posibiladestienes de ganar.
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="box text-white">
                        ¿Eres solo-traveller?, quieres vivir laexperiencia de compartir tu viaje con personas que tengan tus mismasafinidades e intereses.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home-part2"
    }
</script>

<style lang="scss" scoped>
    $theme:#FE575F;
    
    .part2{
        border-bottom: 1px solid rgb(243, 243, 243);
        .col{
            min-height: 450px;
            .box{
                h1{
                    font-size: 1.7rem!important;
                    color:$theme  ;
                }
            }
        }
        .col:last-child{
            background: #fe575f;
            display: flex;
            justify-content: flex-start;
            align-items:center;
            padding-left: 50px;
            .box{
                max-height: 50%;
                width: 46%;
                font-size: 22px;
            }
        }
        .col:first-child{
            display: flex;
            justify-content: flex-end;
            
            .box{
                button{
                    width: 150px;
                    margin: 15px 0;
                }
                .link{
                    color: #D4D4D4;
                    line-height: 21.4px;
                    font-size: 14.4px;
                    text-decoration: underline;
                }
                text-align: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                margin: 50px;
                padding: 20px;
                border: 1px solid #fdfdfd;
                min-width: 45%;
                max-width: 45%;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                box-shadow: 1px 3px 14px #5b5c5d45;
            }
        }
    }
</style>
