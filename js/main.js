// polici
const checkoutSubmitBtn = document.querySelector('.checkout_submit_js');
const policiRef = document.querySelector('#polici_chek');

policiRef.addEventListener('click', policiChecked);
function policiChecked() {
  if (policiRef.checked) {
    checkoutSubmitBtn.classList.remove('disabled');
  } else {
    checkoutSubmitBtn.classList.add('disabled');
  }
}

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

const mask = input => {
  var matrix = '+7 (___) ___-__-__',
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = input.value.replace(/\D/g, '');
  if (def.length >= val.length) val = def;
  input.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};
document.querySelectorAll('.mask__number').forEach(item =>
  item.addEventListener('click', function () {
    item.addEventListener('input', mask.bind(null, item), false);
    item.addEventListener('focus', mask.bind(null, item), false);
    item.addEventListener('blur', mask.bind(null, item), false);
  }),
);
