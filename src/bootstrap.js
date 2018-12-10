window._ = require('lodash')
window.Popper = require('popper.js').default
require('bootstrap')


try {
    window.$ = window.jQuery = require('jquery')
    require('bootstrap')
    require('slick-carousel')
} catch (e) {}