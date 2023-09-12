const layoutFunc = () => {
  // Breakpoints.
  const breakpoints = {
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px'],
    'xlarge-to-max': '(min-width: 1681px)',
    'small-to-xlarge': '(min-width: 481px) and (max-width: 1680px)'
  }

  // Stops animations/transitions until the page has loaded.
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.body.classList.remove('is-preload')
    }, 100)
  })

  // Stops resizing.
  let resizeTimeout
  window.addEventListener('resize', function () {
    document.body.classList.add('is-resizing')
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
      document.body.classList.remove('is-resizing')
    }, 100)
  })

  // Fixes.
  const objectFitImages = Array.from(document.querySelectorAll('.image.object'))
  if (!CSS.supports('object-fit') || navigator.userAgent.includes('Safari')) {
    objectFitImages.forEach(function (image) {
      const img = image.querySelector('img')
      // img.style.opacity = '0'
      image.style.backgroundImage = `url("${img.getAttribute('src')}")`
      image.style.backgroundSize = img.style.objectFit || 'cover'
      image.style.backgroundPosition = img.style.objectPosition || 'center'
    })
  }

  // Sidebar.
  const sidebar = document.getElementById('sidebar')
  const sidebarInner = sidebar.querySelector('.inner')

  // Inactive by default on <= large.
  function toggleSidebar () {
    if (window.innerWidth <= parseInt(breakpoints.large[1])) {
      sidebar.classList.add('inactive')
    } else {
      sidebar.classList.remove('inactive')
    }
  }

  toggleSidebar()
  window.addEventListener('resize', toggleSidebar)

  // Toggle.
  const toggle = document.createElement('a')
  toggle.href = ''
  toggle.classList.add('toggle')
  toggle.textContent = 'Toggle'
  sidebar.appendChild(toggle)

  toggle.addEventListener('click', function (event) {
    event.preventDefault()
    event.stopPropagation()
    sidebar.classList.toggle('inactive')
  })

  // Link clicks.
  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (window.innerWidth > parseInt(breakpoints.large[1])) {
        return
      }
      event.preventDefault()
      event.stopPropagation()
      const href = link.getAttribute('href')
      const target = link.getAttribute('target')
      if (!href || href === '#' || href === '') {
        return
      }

      sidebar.classList.add('inactive')
      setTimeout(function () {
        if (target === '_blank') {
          window.open(href)
        } else {
          window.location.href = href
        }
      }, 500)
    })
  })

  // Prevent certain events inside the panel from bubbling.
  sidebar.addEventListener('click', function (event) {
    if (window.innerWidth > parseInt(breakpoints.large[1])) {
      return
    }
    event.stopPropagation()
  })

  // Hide panel on body click/tap.
  document.body.addEventListener('click', function (e) {
    if (window.innerWidth > parseInt(breakpoints.large[1])) {
      return
    }
    sidebar.classList.add('inactive')
  })

  // Scroll lock.
  window.addEventListener('load', function () {
    let sidebarHeight, windowHeight
    // let scrollTop
    if (window.pageYOffset === 1) {
      window.scrollTo(0, 0)
    }
    function handleScroll () {
      if (window.innerWidth <= parseInt(breakpoints.large[1])) {
        sidebarInner.style.position = ''
        sidebarInner.style.top = ''
        return
      }
      const x = Math.max(sidebarHeight - windowHeight, 0)
      const y = Math.max(0, window.pageYOffset - x)
      if (sidebarInner.getAttribute('data-locked') === '1') {
        if (y <= 0) {
          sidebarInner.setAttribute('data-locked', '0')
          sidebarInner.style.position = ''
          sidebarInner.style.top = ''
        } else {
          sidebarInner.style.top = `-${x}px`
        }
      } else {
        if (y > 0) {
          sidebarInner.setAttribute('data-locked', '1')
          sidebarInner.style.position = 'fixed'
          sidebarInner.style.top = `-${x}px`
        }
      }
    }
    function handleResize () {
      windowHeight = window.innerHeight
      sidebarHeight = sidebarInner.offsetHeight + 30
      handleScroll()
    }
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
  })

  // Menu.
  const menu = document.getElementById('menu')
  const menuOpeners = Array.from(menu.querySelectorAll('ul .opener'))

  menuOpeners.forEach(function (opener) {
    opener.addEventListener('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      menuOpeners.forEach(function (otherOpener, i) {
        if (otherOpener !== opener) {
          otherOpener.classList.remove('active')
        }
      })
      opener.classList.toggle('active')
      // window.dispatchEvent(new Event('resize'))
    })
  })
}

export default { layoutFunc }
