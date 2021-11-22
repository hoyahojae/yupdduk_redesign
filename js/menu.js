// MAIN MENU
document.querySelector('#mainMenu').addEventListener('click', function() {
  // BTN ACTIVE
  document.querySelector('#mainMenu').classList.add('active')
  document.querySelector('#stirMenu').classList.remove('active')
  document.querySelector('#sideMenu').classList.remove('active')
  document.querySelector('#toppingMenu').classList.remove('active')
  document.querySelector('#setMenu').classList.remove('active')
  // ACTIVE
  document.querySelector('.main_menu').classList.add('active')
  document.querySelector('.stir_menu').classList.remove('active')
  document.querySelector('.side_menu').classList.remove('active')
  document.querySelector('.topping_menu').classList.remove('active')
  document.querySelector('.set_menu').classList.remove('.active')
});

// STIR-FRY MENU
document.querySelector('#stirMenu').addEventListener('click', function() {
  // BTN ACTIVE
  document.querySelector('#stirMenu').classList.add('active')
  document.querySelector('#mainMenu').classList.remove('active')
  document.querySelector('#sideMenu').classList.remove('active')
  document.querySelector('#toppingMenu').classList.remove('active')
  document.querySelector('#setMenu').classList.remove('active')
  // ACTIVE
  document.querySelector('.stir_menu').classList.add('active')
  document.querySelector('.main_menu').classList.remove('active')
  document.querySelector('.side_menu').classList.remove('active')
  document.querySelector('.topping_menu').classList.remove('active')
  document.querySelector('.set_menu').classList.remove('.active')
});

// SIDE MENU
document.querySelector('#sideMenu').addEventListener('click', function() {
  // BTN ACTIVE
  document.querySelector('#sideMenu').classList.add('active')
  document.querySelector('#stirMenu').classList.remove('active')
  document.querySelector('#mainMenu').classList.remove('active')
  document.querySelector('#toppingMenu').classList.remove('active')
  document.querySelector('#setMenu').classList.remove('active')
  // ACTIVE
  document.querySelector('.side_menu').classList.add('active')
  document.querySelector('.stir_menu').classList.remove('active')
  document.querySelector('.main_menu').classList.remove('active')
  document.querySelector('.topping_menu').classList.remove('active')
  document.querySelector('.set_menu').classList.remove('.active')
});

// TOPPING
document.querySelector('#toppingMenu').addEventListener('click', function() {
  // BTN ACTIVE
  document.querySelector('#toppingMenu').classList.add('active')
  document.querySelector('#stirMenu').classList.remove('active')
  document.querySelector('#sideMenu').classList.remove('active')
  document.querySelector('#mainMenu').classList.remove('active')
  document.querySelector('#setMenu').classList.remove('active')
  // ACTIVE
  document.querySelector('.topping_menu').classList.add('active')
  document.querySelector('.stir_menu').classList.remove('active')
  document.querySelector('.side_menu').classList.remove('active')
  document.querySelector('.main_menu').classList.remove('active')
  document.querySelector('.set_menu').classList.remove('.active')
});

// SET MENU
document.querySelector('#setMenu').addEventListener('click', function() {
  // BTN ACTIVE
  document.querySelector('#setMenu').classList.add('active')
  document.querySelector('#stirMenu').classList.remove('active')
  document.querySelector('#sideMenu').classList.remove('active')
  document.querySelector('#toppingMenu').classList.remove('active')
  document.querySelector('#mainMenu').classList.remove('active')
  // ACTIVE
  document.querySelector('.set_menu').classList.add('active')
  document.querySelector('.stir_menu').classList.remove('active')
  document.querySelector('.side_menu').classList.remove('active')
  document.querySelector('.topping_menu').classList.remove('active')
  document.querySelector('.main_menu').classList.remove('.active')
});