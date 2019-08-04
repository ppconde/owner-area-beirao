/* Global variable for clicked state
false -> custom picks
true -> default picks
*/
var guideSetup2State = false;

function toggleGuideSetup() {
  //Default picks
  if (guideSetup2State) {
    //Box animation
    $(".box").addClass("box-right-animation");

    //Box logo animation
    $(".box-image").addClass("box-image-right-animation");

    //Background-color toggle
    $(".section-default").addClass("section-default-white-animation");
    $(".section-custom").addClass("section-custom-yellow-animation");

    //Toggle button and scroll
    $(".scroll").remove();
    $(".container-button").remove();
    $(".section-custom").append(
      '<div class="container-button"><button class="button-primary button-toggle">Guia Beirão</button></div>'
    );
    $(".section-default").append(
      '<div class="scroll"><p class="scroll-text">Scroll</p><div class="scroll-line"></div></div>'
    );

    //Custom picks
  } else {
    //Box animation
    $(".box").removeClass("box-right-animation");

    //Box logo animation
    $(".box-image").removeClass("box-image-right-animation");

    //Background-color toggle
    $(".section-default").removeClass("section-default-white-animation");
    $(".section-custom").removeClass("section-custom-yellow-animation");

    //Toggle button and scroll
    $(".scroll").remove();
    $(".container-button").remove();
    $(".section-custom").append(
      '<div class="scroll"><p class="scroll-text">Scroll</p><div class="scroll-line"></div></div>'
    );
    $(".section-default").append(
      '<div class="container-button"><button class="button-primary button-toggle">Guia Beirão</button></div>'
    );
  }
  guideSetup2State = !guideSetup2State;
  console.log(guideSetup2State);
}
