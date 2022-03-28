const checkoutSubmitBtn = document.querySelector('.checkout_submit_js');
const policiRef = document.querySelector('#polici_chek');

function policiChecked() {
  if (policiRef.checked) {
    checkoutSubmitBtn.classList.remove('disabled');
  } else {
    checkoutSubmitBtn.classList.add('disabled');
  }
}

policiRef.addEventListener('click', policiChecked);
