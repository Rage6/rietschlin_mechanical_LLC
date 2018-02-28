// console.log("app.js is functioning.")
$(()=>{

  // Starting points for values
  var menuOpen = false;
  const allSlides = [
    'url("./stylesheets/img/wwnurdem.bmp")',
    'url("./stylesheets/img/hvac.jpg")'
  ];

  // Toggling the menu bar buttons
  // const menuToggle = () => {
  //   if (menuOpen == false) {
  //     $('#allButtons').css('display','block');
  //     menuOpen = true;
  //   } else {
  //     $('#allButtons').css('display','none');
  //     menuOpen = false;
  //   };
  //   console.log("menuToggle")
  // };
  // $('#topMenu').click(menuToggle);

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

  const dropMainMenu = () => {
    if (menuOpen == false) {
      $('#allButtons').css('display','block');
      $('#allButtons').css('animation-play-state','running');
      $('.oneButton').css('animation-play-state','running');
      menuOpen = true;
    } else if (menuOpen == true) {
      $('#allButtons').css('display','none');
      $('#allButtons').css('animation-play-state','paused');
      $('.oneButton').css('animation-play-state','paused');
      menuOpen = false;
    }
  }

  $("#topMenu").click(dropMainMenu);
  $('#elecButton').click(dropMainMenu);
  $('#hvacButton').click(dropMainMenu);
  $('#refButton').click(dropMainMenu);
  $('#contractButton').click(dropMainMenu);
  $('#estimButton').click(dropMainMenu);
  $('#contactButton').click(dropMainMenu);
})
