console.log("Plants1 \n1.Вёрстка валидная +10 \n2.Вёрстка семантическая + 20 \n3.Вёрстка соответствует макету +48 \n4.Требования к css + 12 \n5.Интерактивность, реализуемая через css +20");

console.log("Plants2 \n1.Вёрстка соответствует макету ширина 768рх +24 \n2.Вёрстка соответствует макету ширина 380рх +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки + 15 \n4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22");

//burger menu

(function () {

  const burger = document.querySelector('.burger__icon');
  const modal = document.querySelector('.modal-window');
  const navigation = document.querySelector('.header__nav');
  const closeIcon = document.querySelector('.close-icon');
  const navLinks = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', () => {
    modal.classList.add('modal-window_active');
    navigation.classList.add('header__nav_active');
  })

  const removeModal = () => {
    navigation.classList.remove('header__nav_active');
    modal.classList.remove('modal-window_active');
  }

  modal.addEventListener('click', removeModal);

  closeIcon.addEventListener('click', removeModal);

  navLinks.forEach(item => item.addEventListener('click', removeModal));

}())

