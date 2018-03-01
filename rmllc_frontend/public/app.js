// console.log("app.js is functioning.")
$(()=>{

  // Starting points for values
  var menuOpen = false;
  const allSlides = [
    'url("./stylesheets/img/wwnurdem.bmp")',
    'url("./stylesheets/img/hvac.jpg")'
  ];

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

  // causes gradual open/close of the main menu
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

  // AUTO SCROLL DOWN
  // The screen's current top (in pixels)
  var currentTop = 0;
  $(".oneButton").click(()=>{
    currentTop = $("html").scrollTop();
    return currentTop
  })
  // The top's of the content boxes
  var elecTop = $("#elecBox").offset().top;
  var hvacTop = $("#hvacBox").offset().top;
  var refTop  = $("#refBox").offset().top;
  var contractTop = $("#contractBox").offset().top;
  var estimTop = $("#estimBox").offset().top;
  var contactTop = $("#contactBox").offset().top;
  // Scrolls to elecBox
  const elecScroll = () => {
    $('html, body').animate({
      scrollTop: elecTop
    }, 300)
  };
  $("#elecButton").click(elecScroll);
  // Scroll to hvacBox
  const hvacScroll = () => {
    $('html, body').animate({
      scrollTop: hvacTop
    }, 320)
  };
  $("#hvacButton").click(hvacScroll);
  // Scroll to refBox
  const refScroll = () => {
    $('html, body').animate({
      scrollTop: refTop
    }, 340)
  };
  $("#refButton").click(refScroll);
  // Scroll to contractBox
  const contractScroll = () => {
    $('html, body').animate({
      scrollTop: contractTop
    }, 360)
  };
  $("#contractButton").click(contractScroll);
  // Scroll to hvacBox
  const estimScroll = () => {
    $('html, body').animate({
      scrollTop: estimTop
    }, 380)
  };
  $("#estimButton").click(estimScroll);
  // Scroll to hvacBox
  const contactScroll = () => {
    $('html, body').animate({
      scrollTop: contactTop
    }, 400)
  };
  $("#contactButton").click(contactScroll)

})
