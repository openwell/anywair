document.querySelector('.menu_icon').addEventListener('click', () => {
  document.querySelector('.menu_icon_nav ').classList.toggle('displayNone');
});
const menu_nav_bands = document.querySelectorAll('.menu_nav_brand');

[...menu_nav_bands].forEach(elem => {
  elem.addEventListener('click', elem => {
    if (elem.target.tagName !== 'ION-ICON') {
      elem.target.nextElementSibling.classList.toggle('displayNone');
    }
  });
});

// Accordion
const accordions = document.querySelectorAll(
  '.support_section2_accordion_title'
);
const contents = document.querySelectorAll(
  '.support_section2_accordion_content'
); 
const icons = document.querySelectorAll('.add-icons');
const removeAllBlock = () => {
  [...contents].forEach(elem => {
    elem.classList.remove('displayNone2');
  });
  [...icons].forEach(elem => {
    if (elem.getAttribute('name') == 'remove') {
      elem.setAttribute('name', 'add');
    }
  });
};

[...accordions].forEach(accordion => {
  accordion.addEventListener('click', elem => {
    const current = elem.currentTarget.nextElementSibling;
    if (!current.classList.contains('displayNone2')) {
      removeAllBlock();
    }
    if (elem.currentTarget.firstElementChild.getAttribute('name') == 'remove') {
      elem.currentTarget.firstElementChild.setAttribute('name', 'add');
    } else {
      elem.currentTarget.firstElementChild.setAttribute('name', 'remove');
    }
    current.classList.toggle('displayNone2');
  });
});
// Accordion Ends

//Switcher
const switchers = document.querySelectorAll('.product_section2_title');
const switchersData = document.querySelectorAll('.product_section2_content');
[...switchers].forEach(accordion => {
  accordion.addEventListener('click', elem => {
    const att = elem.target.getAttribute('data-index');
    if (!elem.target.classList.contains('active_product')) {
      for (let i = 0; i < [...switchersData].length; i++) {
        if ([...switchersData][i].getAttribute('data-index') == att) {
          [...switchersData][i].classList.add('active_product');
          [...switchers][i].classList.add('active_product');
        } else {
          [...switchersData][i].classList.remove('active_product');
          [...switchers][i].classList.remove('active_product');
        }
      }
    }
  });
});

function myMap() {
  var uluru = { lat: 6.4470506, lng: 3.3626595 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

// Google Analytics
const ready = function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-158195252-1';
  document.body.appendChild(script);
};

document.onload = ready()

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-158195252-1');
