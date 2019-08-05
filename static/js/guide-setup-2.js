/* Global variable for clicked state
false -> custom picks
true -> default picks
*/
var guideSetup2State = false;

function toggleGuideSetup() {
  //Default picks
  if (guideSetup2State) {
    //Hide elements with toHide class
    $(".toHide").hide();

    //Change guide content
    $(".guide-title").text("Guia Beirão");
    $(".guide-content-1").text(
      "Este é o guia que a Beirão desenvolveu por ti. Podes gerar um link e  recomendar este Guia aos teus hóspedes. Se a qualquer momento  quiseres personalizar o teu próprio guia facilmente o poderás fazer."
    );

    //Hide guide second p
    $(".guide-content-2").hide();

    //Append licor beirao logo
    $(".header-guide").append(
      '<img src="/static/imgs/logo/LB_SIMBOLO.png" class="guide-logo center"/>'
    );

    //Add Café Santiago
    if ($(".card")[0]) {
      console.log($(".card"));
      $(".card").show();
    } else {
      $(".search").append(
        '<!-- Place card --><div class="card col-desktop-4"><div class=" col-desktop-16"><img class="img-place imgfit" src="/static/imgs/places/santiago.jpg"/><h2 class="section-place  margin-top ">Café Santiago da Praça</h2><p class="section-street ">Praça dos Poveiros 82, 4000-041 Porto.</p></div><div class="row col-desktop-16"><!-- Star rating --><div class="stars"><!-- Price level --><p class="price-level">&#x20AC;&#x20AC;</p></div></div><!-- Opening time --><div class="opening-time row col-desktop-16 "><span class="dot vertical-align"></span><p class="opening-time-text vertical-align">Opened - Closes at 6pm</p></div></div>'
      );
      $(".search").append(
        '<!-- Place card --><div class="card col-desktop-4"><div class=" col-desktop-16"><img class="img-place imgfit" src="/static/imgs/places/subenshi.jpg"/><h2 class="section-place  margin-top ">Subenshi</h2><p class="section-street ">P. de Parada Leitão nº13, 4050-366 Porto.</p></div><div class="row col-desktop-16"><!-- Star rating --><div class="stars"><!-- Price level --><p class="price-level">&#x20AC;&#x20AC;</p></div></div><!-- Opening time --><div class="opening-time row col-desktop-16 "><span class="dot vertical-align"></span><p class="opening-time-text vertical-align">Opened - Closes at 12pm</p></div></div>'
      );
      $(".search").append(
        '<!-- Place card --><div class="card col-desktop-4"><div class=" col-desktop-16"><img class="img-place imgfit" src="/static/imgs/places/armazemPeixe.jpg"/><h2 class="section-place  margin-top ">Armazém do Peixe</h2><p class="section-street ">Afurada, Porto.</p></div><div class="row col-desktop-16"><!-- Star rating --><div class="stars"><!-- Price level --><p class="price-level">&#x20AC;&#x20AC;</p></div></div><!-- Opening time --><div class="opening-time row col-desktop-16 "><span class="dot vertical-align"></span><p class="opening-time-text vertical-align">Opened - Closes at 11pm</p></div></div>'
      );
    }

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
      '<div class="container-button"><button class="button-primary button-toggle">Guia da Valentina</button></div>'
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

    //Card hide
    $(".toHide").show();
    $("div[class^='card']").hide();

    //Change guide content
    $(".guide-title").text("Guia da Valentina");

    //Remove licor beirao logo
    $(".guide-logo").remove();
  }
  guideSetup2State = !guideSetup2State;
}
