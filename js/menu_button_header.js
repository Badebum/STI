(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuMoblBtnRef = document.querySelector('[data-menu-mobl-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const moblMenuRef = document.querySelector('[data-menu-mobl]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  menuMoblBtnRef.addEventListener('click', () => {
    const expanded_2 =
      menuMoblBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuMoblBtnRef.classList.toggle('is-open');
    menuMoblBtnRef.setAttribute('aria-expanded', !expanded_2);

    moblMenuRef.classList.toggle('is-open');
  });
})();
