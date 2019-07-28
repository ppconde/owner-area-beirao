function fetchData() {
  //Needs refactoring. Maybe put it in a loop
  let input1 = document.getElementsByClassName("searchMapInput-1")[0];
  let input2 = document.getElementsByClassName("searchMapInput-2")[0];
  let input3 = document.getElementsByClassName("searchMapInput-3")[0];

  let autocomplete1 = new google.maps.places.Autocomplete(input1);
  let autocomplete2 = new google.maps.places.Autocomplete(input2);
  let autocomplete3 = new google.maps.places.Autocomplete(input3);

  //Adds listener for each input
  autocomplete1.addListener("place_changed", function() {
    let place = autocomplete1.getPlace();
    console.log(this);

    //Creates container with the results of place name and address
    $(".search-container-1").append(
      '<div class="col-desktop-5"><div class="search-results"><h4>' +
        place.name +
        "</h4><p>" +
        place.formatted_address +
        '</p><a onclick="removeDiv(this)" class="close"></a></div></div>'
    );

    //Clears input text
    input1.value = "";
  });

  autocomplete2.addListener("place_changed", function() {
    let place = autocomplete2.getPlace();
    console.log(this);

    //Creates container with the results of place name and address
    $(".search-container-2").append(
      '<div class="col-desktop-5"><div class="search-results"><h4>' +
        place.name +
        "</h4><p>" +
        place.formatted_address +
        '</p><a onclick="removeDiv(this)" class="close"></a></div></div>'
    );

    //Clears input text
    input2.value = "";
  });

  autocomplete3.addListener("place_changed", function() {
    let place = autocomplete3.getPlace();
    console.log(this);

    //Creates container with the results of place name and address
    $(".search-container-3").append(
      '<div class="col-desktop-5"><div class="search-results"><h4>' +
        place.name +
        "</h4><p>" +
        place.formatted_address +
        '</p><a onclick="removeDiv(this)" class="close"></a></div></div>'
    );
    //Clears input text
    input3.value = "";
  });
}

function removeDiv(element) {
  //Removes search-container
  element.parentNode.parentNode.parentNode.removeChild(
    element.parentNode.parentNode
  );
}

//Retrieve picture from place
/* 
function getPicture(place) {
  var photos = place.photos;
  console.log(place);
  console.log(photos);
  if (photos)
    return photos[0].getUrl({
      maxWidth: 350,
      maxHeight: 350
    });
}
 */

//In case it's needed for later
/* Retrieves the following information:
        - latitude and longiture
        - opening hours (only for sunday right now)
        - place rating
        - price level
  
  
     /*  document.getElementById(
        "lat-span"
      ).innerHTML = place.geometry.location.lat();
      document.getElementById(
        "lon-span"
      ).innerHTML = place.geometry.location.lng();
      document.getElementById("hours-span").innerHTML =
        place.opening_hours.weekday_text[0];
      document.getElementById("ratings-span").innerHTML = place.rating;
      document.getElementById("price-span").innerHTML = place.price_level;
  
      $(".search-container").append(`<img src="` + getPicture(place) + `"</img>`);
  
      document.getElementById(
        "link-google-maps"
      ).innerHTML = "Link for Google Maps".link(place.url); */
