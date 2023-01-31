console.log("Plants1 \n1.Вёрстка валидная +10 \n2.Вёрстка семантическая + 20 \n3.Вёрстка соответствует макету +48 \n4.Требования к css + 12 \n5.Интерактивность, реализуемая через css +20");

console.log("Plants2 \n1.Вёрстка соответствует макету ширина 768рх +24 \n2.Вёрстка соответствует макету ширина 380рх +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки + 15 \n4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22");

console.log("Plants3 \n1.При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2.Accordion в секции prices который включает в себя 3 выпадающих списка об услугах и ценах + 50\n3.В разделе contacts реализован select с выбором городов.В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +25.");

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

// select city

(function () {
  
  const selector = document.querySelector('.location__selection');
  const variant = document.querySelector('.location__variant'); 
  const cityItems = Array.from(document.querySelectorAll('.location__item'));
  let adress = document.querySelector('.location__adress');
  const location = document.querySelector('.contacts__locations');
  const imageWoman = document.querySelector('.image-woman');
  let callUs = document.querySelector('.adress__call-us');

  selector.addEventListener('click', () => {
    if (selector.classList.contains('location__selection_active')) {
      removeSelectblock();
    } else {
      addSelectBlock();
    }
  });

  cityItems.forEach(item => item.addEventListener('click', () => {
    showSelectCity(item);
    changeCity(item);
  }));

  function addSelectBlock() {
    adress.classList.remove('location__adress_active');
    variant.classList.add('location__variant_active');
    selector.classList.add('location__selection_active');
    location.classList.add('contacts__locations_no-pudding');
    imageWoman.classList.add('image-woman_no-visible');
  };

  function removeSelectblock() {
    adress.classList.remove('location__adress_active');
    variant.classList.remove('location__variant_active');
    selector.classList.remove('location__selection_active');
    location.classList.remove('contacts__locations_no-pudding');
    imageWoman.classList.remove('image-woman_no-visible');
  };

  function showSelectCity(item) {
    variant.classList.remove('location__variant_active');
    adress.classList.add('location__adress_active');
    selector.firstElementChild.innerText = item.innerText;
  };

  function changeCity(item) { 
    let city = document.querySelector('.adress__city-name');
    let phone = document.querySelector('.adress__phone-number');
    let office = document.querySelector('.adress__office-number');
    
    if (item.innerText === 'Canandaigua, NY') { 
      city.innerText = 'Canandaigua, NY';
      phone.innerText = '+1	585	393 0001';
      office.innerText = '151 Charlotte Street';
    };
    if (item.innerText === 'New York City') {
      city.innerText = 'New York City';
      phone.innerText = '+1	212	456 0002';
      office.innerText = '9 East 91st Street';
    };
    if (item.innerText === 'Yonkers, NY') {
      city.innerText = 'Yonkers, NY';
      phone.innerText = '+1	914	678 0003';
      office.innerText = '511 Warburton Ave';
    };
    if (item.innerText === 'Sherrill, NY') {
      city.innerText = 'Sherrill, NY';
      phone.innerText = '+1	315	908 0004';
      office.innerText = '14 WEST Noyes BLVD';
    };

    callUs.href = 'tel:' + phone.innerText.replaceAll(' ', '');
    callUs.title = phone.innerText.replaceAll(' ', '');
    //console.log(callUs.href);
  };

  function calling() {
    callUs.addEventListener('click', () => {
      alert(`You are going to call the ${callUs.href}`)
    })
  };
  calling();

}());