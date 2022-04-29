window.addEventListener('load', () => {
  const calcProductСounter = () => {
    if (document.querySelector('.clio-products-item-inner__price p')) {
      const arrProductItem = document.querySelectorAll('.clio-products-item');

      arrProductItem.forEach(productItem => {
        // quantity
        const isPlus = productItem.querySelector('.clio-plus');
        const isMinus = productItem.querySelector('.clio-minus');
        const quantityInputProduct = productItem.querySelector('.clio-count');
        // prices
        const curentProductPrice = productItem.querySelector('.clio-products-item-inner__price p');
        const amountProductPrice = productItem.querySelector('.clio-products-item-inner__amount p');

        let slicePrice = +curentProductPrice.textContent.replace(/\s/g, '');
        let productTotalCost = slicePrice;

        isPlus.addEventListener('click', () => {
          quantityInputProduct.value++;
          productTotalCost += slicePrice;
          amountProductPrice.textContent = productTotalCost;
          calcTotalProductPrice();
        });

        isMinus.addEventListener('click', () => {
          if (quantityInputProduct.value <= 1) {
            return;
          }
          quantityInputProduct.value--;
          productTotalCost -= slicePrice;
          amountProductPrice.textContent = productTotalCost;
          calcTotalProductPrice();
        });

        // измение инпута
        quantityInputProduct.addEventListener('input', () => {
          if (quantityInputProduct.value <= 1) {
            quantityInputProduct.value = 1;
          }
          quantityInputProduct.value;
          let quantytiInputValue = slicePrice * +quantityInputProduct.value;
          amountProductPrice.textContent = quantytiInputValue;
          calcTotalProductPrice();
        });
      });
    }
  };
  calcProductСounter();

  // подсчет общей цены заказа

  const calcTotalProductPrice = () => {
    const totalPrice = document.querySelector('.clio-total-price > span');
    const amountProductPrice = document.querySelectorAll('.clio-products-item-inner__amount p');

    const arrTotalPrice = [];

    amountProductPrice.forEach(el => {
      let slicePrice = +el.textContent.replace(/\s/g, '');
      arrTotalPrice.push(slicePrice);
    });

    totalPrice.textContent = arrTotalPrice.reduce((sum, current) => sum + current, 0);
  };
  calcTotalProductPrice();

  // количество товаров в корзине

  const calcTotalProductItems = (allCard, number) => {
    const arrProductItem = document.querySelectorAll(allCard);
    const numberProductItemsTop = document.querySelector(number);
    numberProductItemsTop.textContent = arrProductItem.length;
  };

  // удаление товаров

  const removeProdact = el => {
    el = el.target;

    const arrProductItem = document.querySelectorAll('.clio-products-item');

    //удаление одного продукта
    if (el.closest('.clio-products-item-remove')) {
      el.closest('.clio-products-item').remove();
      calcTotalProductItems('.clio-products-item', '.clio-quantity-price span');
      calcTotalProductItems('.clio-products-item', '.clio-readr-order span');
      calcTotalProductPrice();
    }

    //удаление всех продуктов

    if (el.closest('.clio-clean_btn')) {
      arrProductItem.forEach(el => {
        el.remove();
        calcTotalProductItems('.clio-products-item', '.clio-quantity-price span');
        calcTotalProductItems('.clio-products-item', '.clio-readr-order span');
        calcTotalProductPrice();
      });
    }
  };

  document.addEventListener('click', removeProdact);

  // поле инпут промокода

  const promocodeInput = () => {
    const inputPromo = document.querySelector('.clio-promo-input');
    const inputPromoButton = document.querySelector('.clio-promo-btn');
    const textPromoInput = document.querySelector('.clio-text-promocode b');
    const removePromocode = document.querySelector('.clio-promocode-remove');

    inputPromoButton.addEventListener('click', () => {
      if (inputPromo.value.length == 6) {
        textPromoInput.textContent = inputPromo.value;
        inputPromo.value = '';
      }
    });

    removePromocode.addEventListener('click', () => {
      textPromoInput.textContent = 'тут нет промокода';
    });
  };

  promocodeInput();
});
