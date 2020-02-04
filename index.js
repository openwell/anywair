
document.querySelector('.menu_icon').addEventListener('click', () => {
    document.querySelector('.menu_icon_nav ').classList.toggle('displayNone');
  });

document.querySelector('.menu_nav_brand').addEventListener('click', () => {
  document
    .querySelector('.menu_nav_brand_layer1')
    .classList.toggle('displayNone');
});

function myMap() {
  var uluru = { lat: 6.4470506, lng: 3.3626595 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

