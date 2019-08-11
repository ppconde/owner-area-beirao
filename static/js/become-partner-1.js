//Add form input animation
$('[class*="input-"]').focus(function() {
  $($(this).next()).addClass("focused");
});

$('[class*="input-"]').focusout(function() {
  $($(this).next()).removeClass("focused");
});

//Still not working. it adds the class but it doesn't run the animation
/*
$("input").blur(function() {
  var inputValue = $(this).val();
  let nextLabel = $(this).next();
  if (inputValue == "") {
    $(nextLabel).removeClass("focused");
  } else {
    $(nextLabel).addClass("focused");
  }
});

//Add color change animation
$(".button-secondary").click(function() {
  console.log($(this));
  $($(this)).addClass(".changecolour-w-y");
  $(".button-primary").addClass(".changeBckgColour-b-y");
});
*/
