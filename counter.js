// window.addEventListener('load', () => {
//   const countProd = document.querySelector('.count-js');
//   const plusProd = document.querySelector('.plus-js');
//   const minusProd = document.querySelector('.minus-js');
// const curentProdactPrice = document.querySelector('.products-item-inner__price span');
// const amountProdactPrice = document.querySelector('.products-item-inner__amount span');
// const cardProdact = document.querySelector('.products-item-inner');

// let cunterProdact = Number(countProd.textContent);
// let prodPrice = Number(curentProdactPrice.textContent.replace(/\s/g, ''));
// let prodactTotalCost = prodPrice;

//   const onClickPlus = () => {
//     cunterProdact += 1;
//     countProd.textContent = cunterProdact;
//     prodactTotalCost += prodPrice;
//     amountProdactPrice.textContent = prodactTotalCost;
//   };

//   const onClickMinus = () => {
//     if (cunterProdact <= 1) {
//       cardProdact.remove();
//     } else {
//       cunterProdact -= 1;
//       prodactTotalCost -= prodPrice;
//       amountProdactPrice.textContent = prodactTotalCost;
//       countProd.textContent = cunterProdact;
//     }
//     console.log(cunterProdact);
//   };

//   plusProd.addEventListener('click', onClickPlus);
//   minusProd.addEventListener('click', onClickMinus);
// });

// window.addEventListener('DOMContentLoaded', () => {
//   const countProd = document.querySelectorAll('.count-js');
//   const curentProdactPrice = document.querySelector('.products-item-inner__price span');
//   const amountProdactPrice = document.querySelector('.products-item-inner__amount span');
//   const cardProdact = document.querySelector('.products-item-inner');

//   countProd.forEach(el => {
//     let cunterProdact = Number(el.textContent);
//     let prodPrice = Number(curentProdactPrice.textContent.replace(/\s/g, ''));
//     let prodactTotalCost = prodPrice;

//     el.nextElementSibling.addEventListener('click', () => {
//       cunterProdact += 1;
//       el.textContent = cunterProdact;
//       prodactTotalCost += prodPrice;
//       amountProdactPrice.textContent = prodactTotalCost;

//       console.log(cunterProdact);
//     });

//     el.previousElementSibling.addEventListener('click', () => {
//       if (cunterProdact <= 1) {
//         cardProdact.remove();
//       } else {
//         cunterProdact -= 1;
//         prodactTotalCost -= prodPrice;
//         amountProdactPrice.textContent = prodactTotalCost;
//         el.textContent = cunterProdact;
//       }
//       console.log(cunterProdact);
//     });
//   });
// });
