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
        });

        isMinus.addEventListener('click', () => {
          if (quantityInputProduct.value <= 1) {
            return;
          }
          quantityInputProduct.value--;
          productTotalCost -= slicePrice;
          amountProductPrice.textContent = productTotalCost;
        });
      });
    }
  };
  calcProductСounter();

  const removeProdact = el => {
    el = el.target;

    const arrProductItem = document.querySelectorAll('.clio-products-item');

    //удаление одного продукта
    if (el.closest('.clio-products-item-remove')) {
      el.closest('.clio-products-item').remove();
    }

    //удаление всех продуктов

    if (el.closest('.clio-clean_btn')) {
      arrProductItem.forEach(el => {
        el.remove();
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

  // количество товаров в корзине

  const calcTotalProductItems = (allCard, number) => {
    window.addEventListener('click', () => {
      const arrProductItem = document.querySelectorAll(allCard);
      const numberProductItemsTop = document.querySelector(number);
      numberProductItemsTop.textContent = arrProductItem.length;
    });
  };

  calcTotalProductItems('.clio-products-item', '.clio-quantity-price span');
  calcTotalProductItems('.clio-products-item', '.clio-readr-order span');

  // подсчет общей цены заказа

  const totalProductPrice = () => {
    const totalPrice = document.querySelector('.clio-total-price span');
    const amountProductPrice = document.querySelectorAll('.clio-products-item-inner__amount p');

    const arrTotalPrice = [];

    amountProductPrice.forEach(el => {
      let slicePrice = +el.textContent.replace(/\s/g, '');
      arrTotalPrice.push(slicePrice);
    });

    let calcPrice = arrTotalPrice.reduce((a, b) => a + b);
  };

  totalProductPrice();

  document.addEventListener('change', totalProductPrice);
});
