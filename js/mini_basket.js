const miniBasketRef = document.querySelector('.section_basket_modal');
const iconBasket = document.querySelector('.basket-js');
const closeMiniBasketBtn = document.querySelector('.close_btn_js');

iconBasket.addEventListener('click', onIconBasketClick);
closeMiniBasketBtn.addEventListener('click', onIconBasketClick);

function onIconBasketClick() {
  miniBasketRef.classList.toggle('open');
}
