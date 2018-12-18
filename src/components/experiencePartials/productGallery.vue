<template>
    <div class="gallery-preview">
        <h4>Gallery</h4>
        <div id="resgallery">
            <div><img src="http://placehold.it/850x370" alt="" /></div>
            <div><img src="http://placehold.it/850x370" alt="" /></div>
            <div><img src="http://placehold.it/850x370" alt="" /></div>
            <div><img src="http://placehold.it/850x370" alt="" /></div>
            <div><img src="http://placehold.it/850x370" alt="" /></div>
            <div><img src="http://placehold.it/850x370" alt="" /></div>
        </div>
        <br>
        <div id="resthumb">
            <div><img src="http://placehold.it/160x115" alt="" /></div>
            <div><img src="http://placehold.it/160x115" alt="" /></div>
            <div><img src="http://placehold.it/160x115" alt="" /></div>
            <div><img src="http://placehold.it/160x115" alt="" /></div>
            <div><img src="http://placehold.it/160x115" alt="" /></div>
            <div><img src="http://placehold.it/160x115" alt="" /></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-gallery",
        mounted(){
            this.slickSlider()
        },
        methods:{
            slickSlider(){
                $('#resgallery').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: false,
                    asNavFor: '#resthumb'
                });
                $('#resthumb').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '#resgallery',
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                centerMode: true,
                                centerPadding: '60px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                centerMode: true,
                                centerPadding: '50px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                centerMode: true,
                                centerPadding: '70px',
                                dots: false
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                centerMode: true,
                                centerPadding: '0px',
                                dots: false
                            }
                        }
                    ]
                });

                $('.slick-prev.slick-arrow').css({"left": "10px", "z-index":"99999"})
                $('.slick-next.slick-arrow').css({"right": "10px", "z-index":"99999"})
            }
        }
    }
</script>

<style scoped>

</style>