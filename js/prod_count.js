const btnPlusProd = document.querySelector('.plus');
const btnMinusProd = document.querySelector('.minus');
const valueProdRef = document.querySelector('.count');
const priceProdRef = document.querySelector('.price_js');

btnPlusProd.addEventListener('click', onClickBtnPlus);
btnMinusProd.addEventListener('click', onClickBtnMinus);

let valueProdact = 1;
let priceProd = Number(priceProdRef.textContent);

function onClickBtnPlus() {
  valueProdRef.textContent = valueProdact++;
}

function onClickBtnMinus() {
  valueProdRef.textContent = valueProdact--;
}
