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
  const cardProdact = document.querySelectorAll('.products-item-inner');
  // const prodactCount = document.querySelector('.count-js');

  cart = {
    cart_1: 1,
    cart_2: 1,
    cart_3: 1,
  };

  cardProdact.forEach(el => {
    const countItem = el.querySelector('.count-js');
    const prodactProce = el.querySelector('.products-item-inner__price span');
    const amountProdactPrice = el.querySelector('.products-item-inner__amount span');

    el.addEventListener('click', event => {
      let prodPrice = Number(prodactProce.textContent.replace(/\s/g, ''));
      count = countItem;
      if (event.target.classList.value.includes('plus-js')) {
        incrementProductCount(event.target.dataset.id, count, prodPrice, amountProdactPrice);
      } else if (event.target.classList.value.includes('minus-js')) {
        decrementProductCount(event.target.dataset.id, prodPrice, amountProdactPrice);
      }
    });
  });

  const incrementProductCount = (id, count, prodPrice, amountProdactPrice) => {
    cart[id] = Number(count.textContent);
    cart[id]++;
    prodPrice = prodPrice * cart[id];
    amountProdactPrice.textContent = prodPrice;
    count.textContent = cart[id];
    // renderCart();
  };

  const decrementProductCount = (id, prodPrice, amountProdactPrice) => {
    if (cart[id] == 0) {
      deleteProdact(id);
      return true;
    }
    cart[id] = Number(count.textContent);
    cart[id]--;
    amountProdactPrice.textContent = prodPrice * cart[id];
    count.textContent = cart[id];
    // renderCart();
  };

  const deleteProdact = id => {
    delete cart[id];
    // renderCart();
  };

  // const renderCart = () => {
  //   console.log(cart);
  // };

  // renderCart();
});
