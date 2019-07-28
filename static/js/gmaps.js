function fetchData() {
  var input = document.getElementById("searchMapInput");

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener("place_changed", function() {
    var place = autocomplete.getPlace();

    //Creates container with the results of place name and address
    $(".search-container").append(
      '<div class="col-desktop-5"><div class="search-results"><h4>' +
        place.name +
        "</h4><p>" +
        place.formatted_address +
        "</p></div></div>"
    );

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
  });
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
