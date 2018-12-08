<template>
    <div class="footer">
        <div class="container footer-top">
            <div class="row">
                <div class="col-md-4">
                    <img src="../../../src/assets/images/logo_color_black.png">
                    <p>
                        We are an online marketplace platform for booking social group trips.
                        Our service is more affordable and convenient than hotel.
                    </p>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col">
                            <h5>USEFUL LINKS</h5>
                            <a href="#">About Us</a>
                            <router-link :to="{name:'helpSupport'}">Help ?</router-link>
                            <a href="#">Contact Us</a>
                        </div>
                        <div class="col footer-terms">
                            <h5 class="hide"></h5>
                            <a href="#">Terms Of Use</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Copyright Policy</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <h5>LANGUAGE</h5>
                    <select name="" id="" class="form-control">
                        <option value="engine">English</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container-fluid footer-bottom">
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <p>All rights reserved to <span>Peer2Travel 2018.</span></p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>

</style>