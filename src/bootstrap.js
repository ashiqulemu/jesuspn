window._ = require('lodash')
window.Popper = require('popper.js').default



try {



    window.$ = window.jQuery = require('jquery')
    require('bootstrap')

    require('slick-carousel')
} catch (e) {}