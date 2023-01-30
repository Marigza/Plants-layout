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

}());

//change-focus (to blur)

(function () {
  
  const tags = Array.from(document.querySelectorAll('.tag'))
  const tagGarden = document.querySelector('.tag.garden');
  const tagLawn = document.querySelector('.tag.lawn');
  const tagPlanting = document.querySelector('.tag.planting');

  const imagesGarden = Array.from(document.querySelectorAll('.gallery__item.garden'));
  const imagesLawn = Array.from(document.querySelectorAll('.gallery__item.lawn'));
  const imagesPlanting = Array.from(document.querySelectorAll('.gallery__item.planting'));
  const images = [imagesGarden, imagesLawn, imagesPlanting].flat();

  tagGarden.addEventListener('click', () => {           
    tagGarden.classList.toggle('tag_active');
    checkArrayLength();
  });
  tagLawn.addEventListener('click', () => {                  
    tagLawn.classList.toggle('tag_active');
    checkArrayLength();
  });
  tagPlanting.addEventListener('click', () => {                
    tagPlanting.classList.toggle('tag_active');
    checkArrayLength();
  });

  function checkArrayLength() {

    let arrayActive = [];

    function showArrayActive() {
      for (i = 0; i < tags.length; i++) {
        if (tags[i].classList.contains('tag_active')) {
          arrayActive.push(tags[i]);
        }
      }
      return (arrayActive)
    };
    showArrayActive();

    function showActiveImages() {
      if (arrayActive.length === 0) {
        images.forEach(item => item.classList.remove('item_blured'));
      }
      if (arrayActive.length === 1) {
        images.forEach(item => item.classList.add('item_blured'));
        let isGarden = arrayActive.includes(tagGarden) ? imagesGarden : false;
        let islawn = arrayActive.includes(tagLawn) ? imagesLawn : false;
        let isPlanting = arrayActive.includes(tagPlanting) ? imagesPlanting : false;
        let activeImages = isGarden || islawn || isPlanting;
        activeImages.forEach(item => item.classList.remove('item_blured'));
      }
      if (arrayActive.length < tags.length && arrayActive.length > 1) {
        images.forEach(item => item.classList.remove('item_blured'));
        let isGarden = arrayActive.includes(tagGarden) ? false : imagesGarden;
        let islawn = arrayActive.includes(tagLawn) ? false : imagesLawn;
        let isPlanting = arrayActive.includes(tagPlanting) ? false : imagesPlanting;
        let nonActiveImages = isGarden || islawn || isPlanting;
        nonActiveImages.forEach(item => item.classList.add('item_blured'));
      };
      if (arrayActive.length === tags.length) {
        tags.forEach(tag => tag.classList.remove('tag_active'));
        images.forEach(item => item.classList.remove('item_blured'));
      };
      return images;
    };
    showActiveImages();
  };

}());

// prices accordeon

(function () {

  const dropButton = Array.from(document.querySelectorAll('.variant__header'));
  let variantArray = Array.from(document.querySelectorAll('.variant_active'));
  
  dropButton.forEach(item => item.addEventListener('click', function AddActiveAccordeon() {
   
    item.lastElementChild.classList.toggle('variant__drop-btn-active');
    item.parentElement.classList.toggle('variant_active');
    item.nextElementSibling.classList.toggle('variant__container_active');
    variantArray = Array.from(document.querySelectorAll('.variant_active'));

    if (variantArray.length > 1) {
      variantArray.forEach(elem => {
        elem.classList.remove('variant_active');
        elem.lastElementChild.classList.remove('variant__container_active');
        elem.firstElementChild.lastElementChild.classList.remove('variant__drop-btn-active');
      })
      item.lastElementChild.classList.toggle('variant__drop-btn-active');
      item.parentElement.classList.toggle('variant_active');
      item.nextElementSibling.classList.toggle('variant__container_active');
      //return variantArray;
    }

  }))

}());