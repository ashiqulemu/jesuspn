<template>
    <div class="basic">

        <sub-header :title="'Help travelers find the right home'" :sub-title="'Peer2travel lets you make money renting out your place'"></sub-header>

        <div class="container">
            <basic-top ref="basicTop"></basic-top>
            <basic v-if="step1"></basic>
            <room-details v-if="step2"></room-details>
            <description v-if="step3"></description>

        </div>

    </div>
</template>

<script>
    import BasicTop from './../components/wizard-form/basic-top.vue'
    import Basic from './../components/wizard-form/basic.vue'
    import RoomDetails from './../components/wizard-form/room-details.vue'
    import Description from './../components/wizard-form/description.vue'

    export default{
        components:{
            Basic,
            BasicTop,
            RoomDetails,
            Description,
        },
        data(){
            return{
                currentStep:0,
                step1:false,
                step2:false,
                step3:false,
                step4:false,
                step5:false,
                step6:false,
                step7:false,
                step8:false,
                step9:false,
            }

        },
        mounted(){
          this.goStep(1)
        },
        methods:{
            goStep(step){

                step==1?[this.step1=true,this.currentStep=1]:this.step1=false
                step==2?[this.step2=true,this.currentStep=2]:this.step2=false
                step==3?[this.step3=true,this.currentStep=3]:this.step3=false
                step==4?[this.step4=true,this.currentStep=4]:this.step4=false
                step==5?[this.step5=true,this.currentStep=5]:this.step5=false
                step==6?[this.step6=true,this.currentStep=6]:this.step6=false
                step==7?[this.step7=true,this.currentStep=7]:this.step7=false
                step==8?[this.step8=true,this.currentStep=8]:this.step8=false
                step==9?[this.step9=true,this.currentStep=9]:this.step9=false
                this.currentStep>0?this.$refs.basicTop.oneIsActive=true:this.$refs.basicTop.oneIsActive=false
                this.currentStep>1?this.$refs.basicTop.twoIsActive=true:this.$refs.basicTop.twoIsActive=false
                this.currentStep>2?this.$refs.basicTop.threeIsActive=true:this.$refs.basicTop.threeIsActive=false


            },

        }
    }
</script>
<style lang="scss" scoped>

    .basic-content{
        margin-top:50px;
    }



</style>