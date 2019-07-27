function fetchData() {
  var input = document.getElementById("searchMapInput");

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener("place_changed", function() {
    var place = autocomplete.getPlace();
    console.log(place);

    document.getElementById("name-span").innerHTML = place.name;
    document.getElementById("location-snap").innerHTML =
      place.formatted_address;
    document.getElementById(
      "lat-span"
    ).innerHTML = place.geometry.location.lat();
    document.getElementById(
      "lon-span"
    ).innerHTML = place.geometry.location.lng();
    document.getElementById("hours-span").innerHTML =
      place.opening_hours.weekday_text[0];
    document.getElementById("ratings-span").innerHTML = place.rating;
    document.getElementById("price-span").innerHTML = place.price_level;

    $("#img-span").append(`<img src="` + getPicture(place) + `"</img>`);

    document.getElementById(
      "link-google-maps"
    ).innerHTML = "Link for Google Maps".link(place.url);
  });
}

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
