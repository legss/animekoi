$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  animateOut: 'fadeOut',
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

function toggle($class) {
  let trailer = document.querySelector($class)
  trailer.classList.toggle('active')
}
