$('[class*="input-"]').focus(function() {
  $($(this).next()).addClass("focused");
});

$("input").blur(function() {
  var inputValue = $(this).val();
  let nextLabel = $(this).next();
  if (inputValue == "") {
    $(nextLabel).removeClass("focused");
  } else {
    $(nextLabel).addClass("focused");
  }
});
