// console.log("app.js is functioning.")
$(()=>{

  // Starting points for values
  var menuOpen = false;

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
})
