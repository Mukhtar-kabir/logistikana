'use strict';

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');
const navBar = document.querySelector('.nav__bar');
const bar = document.querySelector('.bar');
const popup = document.querySelector('.popup-up');
const overlay = document.querySelector('.overlay');
const iphoneBtn = document.querySelector('.iphone-btn');
const btnClose = document.querySelector('.btn--close-modal');

const closeMenu = function () {
  navMenu.classList.add('hidden');
};

const open = function () {
  popup.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
};

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach((el) =>
  el.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

iphoneBtn.addEventListener('click', open);
overlay.addEventListener('click', close);
btnClose.addEventListener('click', close);

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Gaurd clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
