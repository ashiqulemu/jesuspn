<template>
    <div class="home-part4">
        <div class="container">
            <div class="row">
                <div class="col">
                    <i class="btn-circle-primary fa fa-gift"></i>
                    <p>We raffle two prizes, only participating you enter the raffle of one of them. The other you'll have to work a little and share our website with your friends.</p>
                </div>
                <div class="col">
                    <i class="btn-circle-primary fa fa-cloud"></i>
                    <p>Enjoy three free nights accommodation in Gran Canaria for one person. Participate is completely free we only ask that you collaborate in publicizing the concept of Trip-Sharing.</p>

                </div>
                <div class="col">
                    <i class="btn-circle-primary fa fa-users"></i>
                    <p>You will know the person to your travel companion before traveling, knowing their hobbies, tastes and their online reputation from 12 to 15 July 2018.</p>

                </div>
                <div class="col">
                    <i class="btn-circle-primary fa fa-globe"></i>
                    <p>You will enjoy the gastronomy, sport, culture and history of the island of Gran Canaria with your travel companion, the ties that are made in a trip do not break so easily.</p>
                </div>
            </div>
            <br>
            <button class="btn btn btn-primary rounded">Start the trip!</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-part4"
    }
</script>

<style scoped lang="scss">
.home-part4{
    padding: 50px 0;
    text-align: center;
    .col{
        min-width: 200px;
        text-align: center;
    }
    .btn-circle-primary{
        color: #fff;
        min-width: 60px;
        padding: 15px 15px;
        font-size: 30px;
        border-radius: 100%;
        background: #FE575F;
        margin-bottom: 20px;
    }
}
</style>
