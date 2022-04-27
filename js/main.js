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

  const removeProductItem = () => {
    const arrProductItem = document.querySelectorAll('.clio-products-item');

    arrProductItem.forEach(productItem => {
      const removeProductItem = productItem.querySelector('.clio-products-item-remove');
      removeProductItem.addEventListener('click', () => {
        productItem.remove();
      });
    });
  };

  removeProductItem();

  const removeAllProductItems = () => {
    const arrProductItem = document.querySelectorAll('.clio-products-item');
    const removeButton = document.querySelector('.clio-clean_btn');

    arrProductItem.forEach(productItem => {
      removeButton.addEventListener('click', () => {
        productItem.remove();
      });
    });
  };

  removeAllProductItems();
});
