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
                    <a href="">
                        Lorem ipsum dolor sit amet
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="box">
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aperiam blanditiis dolore et
                        expedita inventore,
                        laboriosam maiores
                    </p>
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
    .part2{
        .col:last-child{
            background: #fe575f;
            .box{
                padding-top: 50px;
                padding-left: 20px;
                font-size: 25px;
                width: 50%;
            }
        }
        .col:first-child{
            display: flex;
            justify-content: flex-end;
            .box{
                button{
                    width: 150px;
                }
                text-align: center;
                display: flex;
                flex-direction: column;
                margin: 20px;
                padding: 20px;
                border: 1px solid lightgrey;
                width: 40%;
            }
        }
    }
</style>