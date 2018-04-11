$(()=>{

  // Starting points for values

  var menuOpen = false;
  const allSlides = [
    'url("./stylesheets/img/wwnurdem.bmp")',
    'url("./stylesheets/img/hvac.jpg")'
  ];

  const bodyWidth = $("body");

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
  $('#electricalButton').click(dropMainMenu);
  $('#heating-ac-Button').click(dropMainMenu);
  $('#refrigeration-Button').click(dropMainMenu);
  $('#bucket-Button').click(dropMainMenu);
  $('#contractButton').click(dropMainMenu);
  $('#aboutUsButton').click(dropMainMenu);
  $('#contactButton').click(dropMainMenu);

  // AUTO SCROLL DOWN
  // The screen's current top (in pixels)
  var currentTop = 0;
  $(".oneButton").click(()=>{
    currentTop = $("html").scrollTop();
    return currentTop
  })
  // The top's of the content boxes
  var elecTop = $("#electricalBox").offset().top;
  var hvacTop = $("#heating-ac-Box").offset().top;
  var refTop  = $("#refrigeration-Box").offset().top;
  var bucketTop = $("#bucket-Box").offset().top;
  var contractTop = $("#contractBox").offset().top;
  var aboutUsTop = $("#aboutUsBox").offset().top;
  var contactTop = $("#contactBox").offset().top;
  // Scrolls to electricalBox
  const elecScroll = () => {
    elecTop = $("#electricalBox").offset().top;
    $('html, body').animate({
      scrollTop: elecTop
    }, 300)
  };
  $("#electricalButton").click(elecScroll);
  // Scroll to heating-ac-Box
  const hvacScroll = () => {
    hvacTop = $("#heating-ac-Box").offset().top;
    $('html, body').animate({
      scrollTop: hvacTop
    }, 320)
  };
  $("#heating-ac-Button").click(hvacScroll);
  // Scroll to refrigeration-Box
  const refScroll = () => {
    refTop  = $("#refrigeration-Box").offset().top;
    $('html, body').animate({
      scrollTop: refTop
    }, 340)
  };
  $("#refrigeration-Button").click(refScroll);
  // Scroll to bucket-Box
  const bucketScroll = () => {
    bucketTop = $("#bucket-Box").offset().top;
    $('html, body').animate({
      scrollTop: bucketTop
    }, 340)
  };
  $("#bucket-Button").click(bucketScroll);
  // Scroll to contractBox
  const contractScroll = () => {
    contractTop = $("#contractBox").offset().top;
    $('html, body').animate({
      scrollTop: contractTop
    }, 360)
  };
  $("#contractButton").click(contractScroll);
  // Scroll to aboutUsBox
  const aboutUsScroll = () => {
    aboutUsTop = $("#aboutUsBox").offset().top;
    $('html, body').animate({
      scrollTop: aboutUsTop
    }, 380)
  };
  $("#aboutUsButton").click(aboutUsScroll);
  // Scroll to contactBox
  const contactScroll = () => {
    contactTop = $("#contactBox").offset().top;
    $('html, body').animate({
      scrollTop: contactTop
    }, 400)
  };
  $("#contactButton").click(contactScroll)
  //Scroll back to top of page
  const goUp = () => {
    $('html, body').animate({
      scrollTop: 0
    }, 420)
  };
  $(".clickArrow").click(goUp);

})
