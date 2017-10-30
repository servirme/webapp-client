/* eslint-disable */
if (typeof jQuery === 'undefined') {
  throw new Error('jQuery plugins need to be before this file')
}

$.AdminBSB = {}
$.AdminBSB.options = {
  colors: {
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#ffe821',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    grey: '#9E9E9E',
    blueGrey: '#607D8B',
    black: '#000000',
    white: '#ffffff',
  },
  leftSideBar: {
    scrollColor: 'rgba(0,0,0,0.5)',
    scrollWidth: '4px',
    scrollAlwaysVisible: false,
    scrollBorderRadius: '0',
    scrollRailBorderRadius: '0',
    scrollActiveItemWhenPageLoad: true,
    breakpointWidth: 1170,
  },
  dropdownMenu: {
    effectIn: 'fadeIn',
    effectOut: 'fadeOut',
  },
}

/* Left Sidebar - Function =================================================================================================
*  You can manage the left sidebar menu options
*
*/
$.AdminBSB.leftSideBar = {
  activate() {
    const _this = this
    const $body = $('body')
    const $overlay = $('.overlay')

    // Close sidebar
    $(window).click((e) => {
      let $target = $(e.target)
      if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent() }

      if (!$target.hasClass('bars') && _this.isOpen() && $target.parents('#leftsidebar').length === 0) {
        if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut()
        $body.removeClass('overlay-open')
      }
    })

    $.each($('.menu-toggle.toggled'), (i, val) => {
      $(val).next().slideToggle(0)
    })

    // When page load
    $.each($('.menu .list li.active'), (i, val) => {
      const $activeAnchors = $(val).find('a:eq(0)')

      $activeAnchors.addClass('toggled')
      $activeAnchors.next().show()
    })

    // Collapse or Expand Menu
    $('.menu-toggle').on('click', (e) => {
      const $this = $(this)
      const $content = $this.next()

      if ($($this.parents('ul')[0]).hasClass('list')) {
        const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle')

        $.each($('.menu-toggle.toggled').not($not).next(), (i, val) => {
          if ($(val).is(':visible')) {
            $(val).prev().toggleClass('toggled')
            $(val).slideUp()
          }
        })
      }

      $this.toggleClass('toggled')
      $content.slideToggle(320)
    })

    // Set menu height
    _this.setMenuHeight()
    _this.checkStatuForResize(true)
    $(window).resize(() => {
      _this.setMenuHeight()
      _this.checkStatuForResize(false)
    })

    // Set Waves
    Waves.attach('.menu .list a', ['waves-block'])
    Waves.init()
  },
  setMenuHeight() {
    if (typeof $.fn.slimScroll !== 'undefined') {
      const configs = $.AdminBSB.options.leftSideBar
      const height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()))
      const $el = $('.list')

      $el.slimscroll({
        height: `${height}px`,
        color: configs.scrollColor,
        size: configs.scrollWidth,
        alwaysVisible: configs.scrollAlwaysVisible,
        borderRadius: configs.scrollBorderRadius,
        railBorderRadius: configs.scrollRailBorderRadius,
      })

      // Scroll active menu item when page load, if option set = true
      if ($.AdminBSB.options.leftSideBar.scrollActiveItemWhenPageLoad) {
        const activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop
        if (activeItemOffsetTop > 150) $el.slimscroll({ scrollTo: `${activeItemOffsetTop}px` })
      }
    }
  },
  checkStatuForResize(firstTime) {
    const $body = $('body')
    const $openCloseBar = $('.navbar .navbar-header .bars')
    const width = $body.width()

    if (firstTime) {
      $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
        $(this).removeClass('no-animate').dequeue()
      })
    }

    if (width < $.AdminBSB.options.leftSideBar.breakpointWidth) {
      $body.addClass('ls-closed')
      $openCloseBar.fadeIn()
    } else {
      $body.removeClass('ls-closed')
      $openCloseBar.fadeOut()
    }
  },
  isOpen() {
    return $('body').hasClass('overlay-open')
  },
}
//= =========================================================================================================================

/* Right Sidebar - Function ================================================================================================
*  You can manage the right sidebar menu options
*
*/
$.AdminBSB.rightSideBar = {
  activate() {
    const _this = this
    const $sidebar = $('#rightsidebar')
    const $overlay = $('.overlay')

    // Close sidebar
    $(window).click((e) => {
      let $target = $(e.target)
      if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent() }

      if (!$target.hasClass('js-right-sidebar') && _this.isOpen() && $target.parents('#rightsidebar').length === 0) {
        if (!$target.hasClass('bars')) $overlay.fadeOut()
        $sidebar.removeClass('open')
      }
    })

    $('.js-right-sidebar').on('click', () => {
      $sidebar.toggleClass('open')
      if (_this.isOpen()) { $overlay.fadeIn() } else { $overlay.fadeOut() }
    })
  },
  isOpen() {
    return $('.right-sidebar').hasClass('open')
  },
}
//= =========================================================================================================================

/* Searchbar - Function ================================================================================================
*  You can manage the search bar
*
*/
const $searchBar = $('.search-bar')
$.AdminBSB.search = {
  activate() {
    const _this = this

    // Search button click event
    $('.js-search').on('click', () => {
      _this.showSearchBar()
    })

    // Close search click event
    $searchBar.find('.close-search').on('click', () => {
      _this.hideSearchBar()
    })

    // ESC key on pressed
    $searchBar.find('input[type="text"]').on('keyup', (e) => {
      if (e.keyCode === 27) {
        _this.hideSearchBar()
      }
    })
  },
  showSearchBar() {
    $searchBar.addClass('open')
    $searchBar.find('input[type="text"]').focus()
  },
  hideSearchBar() {
    $searchBar.removeClass('open')
    $searchBar.find('input[type="text"]').val('')
  },
}
//= =========================================================================================================================

/* Navbar - Function =======================================================================================================
*  You can manage the navbar
*
*/
$.AdminBSB.navbar = {
  activate() {
    const $body = $('body')
    const $overlay = $('.overlay')

    // Open left sidebar panel
    $('.bars').on('click', () => {
      $body.toggleClass('overlay-open')
      if ($body.hasClass('overlay-open')) { $overlay.fadeIn() } else { $overlay.fadeOut() }
    })

    // Close collapse bar on click event
    $('.nav [data-close="true"]').on('click', () => {
      const isVisible = $('.navbar-toggle').is(':visible')
      const $navbarCollapse = $('.navbar-collapse')

      if (isVisible) {
        $navbarCollapse.slideUp(() => {
          $navbarCollapse.removeClass('in').removeAttr('style')
        })
      }
    })
  },
}
//= =========================================================================================================================

/* Input - Function ========================================================================================================
*  You can manage the inputs(also textareas) with name of class 'form-control'
*
*/
$.AdminBSB.input = {
  activate() {
    // On focus event
    $('.form-control').focus(function () {
      $(this).parent().addClass('focused')
    })

    // On focusout event
    $('.form-control').focusout(function () {
      const $this = $(this)
      if ($this.parents('.form-group').hasClass('form-float')) {
        if ($this.val() === '') { $this.parents('.form-line').removeClass('focused') }
      } else {
        $this.parents('.form-line').removeClass('focused')
      }
    })

    // On label click
    $('body').on('click', '.form-float .form-line .form-label', function () {
      $(this).parent().find('input').focus()
    })

    // Not blank form
    $('.form-control').each(function () {
      if ($(this).val() !== '') {
        $(this).parents('.form-line').addClass('focused')
      }
    })
  },
}
//= =========================================================================================================================

/* Form - Select - Function ================================================================================================
*  You can manage the 'select' of form elements
*
*/
$.AdminBSB.select = {
  activate() {
    if ($.fn.selectpicker) { $('select:not(.ms)').selectpicker() }
  },
}
//= =========================================================================================================================

/* DropdownMenu - Function =================================================================================================
*  You can manage the dropdown menu
*
*/

$.AdminBSB.dropdownMenu = {
  activate() {
    const _this = this

    $('.dropdown, .dropup, .btn-group').on({
      'show.bs.dropdown': function () {
        const dropdown = _this.dropdownEffect(this)
        _this.dropdownEffectStart(dropdown, dropdown.effectIn)
      },
      'shown.bs.dropdown': function () {
        const dropdown = _this.dropdownEffect(this)
        if (dropdown.effectIn && dropdown.effectOut) {
          _this.dropdownEffectEnd(dropdown, () => { })
        }
      },
      'hide.bs.dropdown': function (e) {
        const dropdown = _this.dropdownEffect(this)
        if (dropdown.effectOut) {
          e.preventDefault()
          _this.dropdownEffectStart(dropdown, dropdown.effectOut)
          _this.dropdownEffectEnd(dropdown, () => {
            dropdown.dropdown.removeClass('open')
          })
        }
      },
    })

    // Set Waves
    Waves.attach('.dropdown-menu li a', ['waves-block'])
    Waves.init()
  },
  dropdownEffect(target) {
    let effectIn = $.AdminBSB.options.dropdownMenu.effectIn
    let effectOut = $.AdminBSB.options.dropdownMenu.effectOut
    const dropdown = $(target)
    const dropdownMenu = $('.dropdown-menu', target)

    if (dropdown.length > 0) {
      const udEffectIn = dropdown.data('effect-in')
      const udEffectOut = dropdown.data('effect-out')
      if (udEffectIn !== undefined) { effectIn = udEffectIn }
      if (udEffectOut !== undefined) { effectOut = udEffectOut }
    }

    return {
      target,
      dropdown,
      dropdownMenu,
      effectIn,
      effectOut,
    }
  },
  dropdownEffectStart(data, effectToStart) {
    if (effectToStart) {
      data.dropdown.addClass('dropdown-animating')
      data.dropdownMenu.addClass('animated dropdown-animated')
      data.dropdownMenu.addClass(effectToStart)
    }
  },
  dropdownEffectEnd(data, callback) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    data.dropdown.one(animationEnd, () => {
      data.dropdown.removeClass('dropdown-animating')
      data.dropdownMenu.removeClass('animated dropdown-animated')
      data.dropdownMenu.removeClass(data.effectIn)
      data.dropdownMenu.removeClass(data.effectOut)

      if (typeof callback === 'function') {
        callback()
      }
    })
  },
}
//= =========================================================================================================================

/* Browser - Function ======================================================================================================
*  You can manage browser
*
*/
const edge = 'Microsoft Edge'
const ie10 = 'Internet Explorer 10'
const ie11 = 'Internet Explorer 11'
const opera = 'Opera'
const firefox = 'Mozilla Firefox'
const chrome = 'Google Chrome'
const safari = 'Safari'

$.AdminBSB.browser = {
  activate() {
    const _this = this
    const className = _this.getClassName()

    if (className !== '') $('html').addClass(_this.getClassName())
  },
  getBrowser() {
    const userAgent = navigator.userAgent.toLowerCase()

    if (/edge/i.test(userAgent)) {
      return edge
    } else if (/rv:11/i.test(userAgent)) {
      return ie11
    } else if (/msie 10/i.test(userAgent)) {
      return ie10
    } else if (/opr/i.test(userAgent)) {
      return opera
    } else if (/chrome/i.test(userAgent)) {
      return chrome
    } else if (/firefox/i.test(userAgent)) {
      return firefox
    } else if (navigator.userAgent.match(/Version\/[\d.]+.*Safari/)) {
      return safari
    }

    return undefined
  },
  getClassName() {
    const browser = this.getBrowser()

    if (browser === edge) {
      return 'edge'
    } else if (browser === ie11) {
      return 'ie11'
    } else if (browser === ie10) {
      return 'ie10'
    } else if (browser === opera) {
      return 'opera'
    } else if (browser === chrome) {
      return 'chrome'
    } else if (browser === firefox) {
      return 'firefox'
    } else if (browser === safari) {
      return 'safari'
    }
    return ''
  },
}
//= =========================================================================================================================

$(() => {
  $.AdminBSB.browser.activate()
  $.AdminBSB.leftSideBar.activate()
  $.AdminBSB.rightSideBar.activate()
  $.AdminBSB.navbar.activate()
  $.AdminBSB.dropdownMenu.activate()
  $.AdminBSB.input.activate()
  $.AdminBSB.select.activate()
  $.AdminBSB.search.activate()

  setTimeout(() => { $('.page-loader-wrapper').fadeOut() }, 50)
})
