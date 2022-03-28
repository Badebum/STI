const checkoutBtnRef = document.querySelector('.checkout_js');
const sectionOrderRef = document.querySelector('.order');
const orderDivRefs = document.querySelector('.prod_order_js');

checkoutBtnRef.addEventListener('click', onCheckoutOrder);

function onCheckoutOrder() {
  sectionOrderRef.classList.add('is-open');
  orderDivRefs.classList.add('hide');
}
