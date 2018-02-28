// console.log("app.js is functioning.")
$(()=>{

  // Starting points for values
  var menuOpen = false;
  const allSlides = [
    'url("./stylesheets/img/wwnurdem.bmp")',
    'url("./stylesheets/img/hvac.jpg")'
  ]

  // Toggling the menu bar buttons
  const menuToggle = () => {
    if (menuOpen == false) {
      $('#allButtons').css('display','block');
      menuOpen = true;
    } else {
      $('#allButtons').css('display','none');
      menuOpen = false;
    };
  };
  $('#topMenu').click(menuToggle);
  $('#elecButton').click(menuToggle);
  $('#hvacButton').click(menuToggle);
  $('#refButton').click(menuToggle);
  $('#contractButton').click(menuToggle);
  $('#estimButton').click(menuToggle);
  $('#contactButton').click(menuToggle);

  // Auto slideshow on title
  var slideNum = 0;
  const changeSlide = () => {
    if (slideNum == 1) {
      $('#title').css('background-image',allSlides[1]);
      slideNum = 0
    } else {
      $('#title').css('background-image',allSlides[0]);
      slideNum = 1
    };
    setTimeout(changeSlide, 5000);
  };
  changeSlide();

})
