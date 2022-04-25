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

//  const countProd = document.querySelector('.count-js');
//  const curentProdactPrice = document.querySelector('.products-item-inner__price span');
//  const amountProdactPrice = document.querySelector('.products-item-inner__amount span');

// window.addEventListener('DOMContentLoaded', () => {
//   const countProd = document.querySelectorAll('.count-js');
//   const curentProdactPrice = document.querySelector('.products-item-inner__price span');
//   const amountProdactPrice = document.querySelector('.products-item-inner__amount span');

//   let prodPrice = Number(curentProdactPrice.textContent.replace(/\s/g, ''));
//   let prodactTotalCost = prodPrice;

//   countProd.forEach(el => {
//     Number(el.textContent);
//     el.nextElementSibling.addEventListener('click', () => {
//       el.textContent++;

//       prodactTotalCost += prodPrice;
//       amountProdactPrice.textContent = prodactTotalCost;
//     });

//     el.previousElementSibling.addEventListener('click', () => {
//       el.textContent--;
//       prodactTotalCost -= prodPrice;
//       amountProdactPrice.textContent = prodactTotalCost;
//     });
//   });
// });

window.addEventListener('DOMContentLoaded', () => {
  let cart = {
    123: 1,
    321: 1,
  };
  const cardProdact = document.querySelectorAll('.prod_count_btn');

  cardProdact.forEach(el => {
    el.addEventListener('click', event => {
      if (event.target.classList.value.includes('plus-js')) {
        incrementProductCount(event.target.dataset.id);
      } else if (event.target.classList.value.includes('minus-js')) {
        decrementProductCount(event.target.dataset.id);
      }
    });
  });

  const incrementProductCount = id => {
    cart[id]++;
    renderCart();
  };

  const decrementProductCount = id => {
    if (cart[id] - 1 == 0) {
      deleteProdact(id);
      return true;
    }
    cart[id]--;
    renderCart();
  };

  const deleteProdact = id => {
    delete cart[id];
    renderCart();
  };

  const renderCart = () => {
    console.log(cart);
  };
  renderCart();

  // const decrementProductCount = () => {

  // };
});
