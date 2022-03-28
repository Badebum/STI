// polici
// const checkoutSubmitBtn = document.querySelector('.checkout_submit_js');
// const policiRef = document.querySelector('#polici_chek');

// policiRef.addEventListener('click', policiChecked);
// function policiChecked() {
//   if (policiRef.checked) {
//     checkoutSubmitBtn.classList.remove('disabled');
//   } else {
//     checkoutSubmitBtn.classList.add('disabled');
//   }
// }

// end polici

// мобильное меню
const menuBtnRef = document.querySelector('[data-menu-button]');
const menuMoblBtnRef = document.querySelector('[data-menu-mobl-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const moblMenuRef = document.querySelector('[data-menu-mobl]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});

menuMoblBtnRef.addEventListener('click', () => {
  const expanded_2 = menuMoblBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuMoblBtnRef.classList.toggle('is-open');
  menuMoblBtnRef.setAttribute('aria-expanded', !expanded_2);

  moblMenuRef.classList.toggle('is-open');
});
//

//открытие мини корзины
const miniBasketRef = document.querySelector('.section_basket_modal');
const iconBasket = document.querySelector('.basket-js');
// const closeMiniBasketBtn = document.querySelector('.close_btn_js');

iconBasket.addEventListener('click', onIconBasketClick);
// closeMiniBasketBtn.addEventListener('click', onIconBasketClick);

function onIconBasketClick() {
  miniBasketRef.classList.toggle('open');
}
//
