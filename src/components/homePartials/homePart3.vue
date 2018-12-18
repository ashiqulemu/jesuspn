<template>
    <div class="home-part3">
        <div class="row">
            <div class="container-fluid">
                <div class="col-lg-12">
                    <div class="heading">
                        <h2>Happening Cities</h2>
                        <span>Cities you must explore this summer</span>
                    </div><!-- Heading -->
                    <ul class="citieslists">
                        <li>
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Hong Kong</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">China</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Malaysia</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Singapur</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                        </li>
                        <li>
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Pakistan</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Turkey</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Japan</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Australia</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                        </li>
                        <li>
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Pakistan</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Turkey</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Japan</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                            <div class="cities">
                                <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
                                <div class="cities-title"><h3><a href="#" title="">Australia</a></h3><span>7 listings</span></div>
                            </div><!-- Cities -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-part3",
        mounted(){


                /*================== Instagram Footer =====================*/
                $('.citieslists').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    slide: 'li',
                    dots: false,
                    centerMode: true,
                    centerPadding: '375px',
                    focusOnSelect: false,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '200px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '100px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px',
                                slidesToScroll: 1,
                                dots: true
                            }
                        }
                    ]
                });







        }
    }

</script>

<style scoped lang="scss">
    .home-part3{


    }
</style>