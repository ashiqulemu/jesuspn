<template>
    <div class="footer" name="footer">
        <div class="container footer-top">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <img src="../../../src/assets/images/logo_color_black.png">
                    <p class="footer-para">
                        We are an online marketplace platform for booking social group trips.
                        Our service is more affordable and convenient than hotel.
                    </p>
                    <i class=" fa rounded-icon fa-facebook"></i>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col">
                            <p class="column-title">USEFUL LINKS</p>
                            <a href="#">About Us</a>
                            <router-link :to="{name:'helpSupport'}">Help ?</router-link>
                            <router-link :to="{name:'contact'}">Contact Us</router-link>
                        </div>
                        <div class="col footer-terms">
                            <p class="column-title"> </p>
                            <router-link :to="{name:'termsCondition'}">Terms Of Use</router-link>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Copyright Policy</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="footerLastColumn">
                        <p class="column-title">LANGUAGE</p>
                        <select id="" class="float-right form-control">
                            <option value="engine">English</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid footer-bottom"><br>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <p>Designed by Robert Imeri.All right reserved to  <span>Peer2Travel 2018.</span></p>
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

<style lang="scss" scoped>

</style>
