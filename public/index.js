var element = document.getElementById("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  const zipcode = event.target.elements.zipcode.value;
  console.log(zipcode);
  fetch(`https://weather-cards.herokuapp.com/findWeather?zipcode=${zipcode}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
  .then(json => {
    document.getElementById("temperature").innerHTML = json.main.temp + '°';
    document.getElementById("description").innerHTML = json.weather[0].description;
  })
  .catch(err => console.error(err))
});