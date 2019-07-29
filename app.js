// Init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location 
  storage.setLocationData(city, country);

  // Get and display 
  getWeather();

  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

  particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});