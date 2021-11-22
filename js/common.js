// ScrollMagic.js
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .6
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// gsap.js
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 300) {
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(toTopEl, .2, {
      x: 300
    });
  }
}, 300));

// To TOP
toTopEl.addEventListener('click', function () {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(window, .7, {
    scrollTo: 0
  });
});