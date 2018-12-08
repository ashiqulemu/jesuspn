<template>
    <div class="help-support">

        <sub-header :title="'Terms & Conditions'" :sub-title="'Terms & conditions Page'"></sub-header>

        <div class="container">
            <div class="row">
                <div class="help-content">
                    <h3 class="text-own-center">Terms & conditions</h3>
                    <p class="text-own-center">
                        Assumenda fugiat fugit laboriosam rem veritatis? Assumenda, commodi
                        cumque deserunt dolorem dolores dolorum ducimus, ea eaque in, molestiae molestias quo ratione veritatis.
                        There are many Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores beatae corporis dicta dolore, dolorem doloremque eius eligendi excepturi,
                        consectetur adipisicing elit. Assumenda fugiat fugit laboriosam rem veritatis? Assumenda, commodi
                        cumque deserunt dolorem dolores dolorum ducimus, ea eaque in, molestiae molestias quo ratione veritatis.
                    </p>
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
    .help-support{
        .container{
            padding-top: 50px;
        }
        min-height: 550px;
    }
    .help-content{
        padding: 20px;
        h3{
            padding:10px;
        }
        border: 1px solid #e9e9e9;
        max-width: 960px;
        text-align: center;
        margin: 0 auto;
    }

</style>