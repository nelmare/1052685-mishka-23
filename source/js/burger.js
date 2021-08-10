var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
// navToggle.classList.remove('main-nav__toggle--nojs');
// navToggle.classList.add('main-nav__toggle--open');
// navMainList.classList.add('main-nav--closed');
//
// navToggle.addEventListener('click', function () {
//   navMainList.classList.toggle('main-nav--closed');
//   navMainList.classList.toggle('main-nav--open');
//   navToggle.classList.toggle('main-nav__toggle--open');
//   navToggle.classList.toggle('main-nav__toggle--closed');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});

