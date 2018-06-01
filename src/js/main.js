import {Even} from './even.js'

import '../css/style.scss'

$(document).ready(function () {
  Even.backToTop()
  Even.mobileNavbar()
  Even.toc()
  Even.fancybox()
})

if (ENABLE_HIGHLIGHT===true) {
  hljs.initHighlighting();
  Even.highlight();
}

