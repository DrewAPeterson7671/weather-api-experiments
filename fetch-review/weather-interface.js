$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://www.omdbapi.com/?t=${city}&apikey=d54828b2`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

   const getElements = function(response) {
      $('.showHumidity').text(`${response.Title}`);
       $('.showTemp').text(`${response.Director}`);
      // $('.showHumidity').text(`The humidity in ${city} is ${response.title}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
