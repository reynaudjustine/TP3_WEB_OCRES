
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

       /*const main1 = data.weather[1].main;
      const description1 = data.weather[1].description;
      const temp1 = data.main.temp;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.weather[1].icon);*/

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // Modifier le DOM
     /* document.getElementById('tomorrow-forecast-main').innerHTML = main1;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description1;
      document.getElementById('icon-weather-container1').innerHTML = icon1;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp1}°C`;*/
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}



function startVille() {

  const ville = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(ville);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    //.getThreeDayForecast()
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);


     /* const main1 = data.weather[1].main;
      const description1 = data.weather[1].description;
      const temp1 = data.main.temp;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.weather[1].icon);*/

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;



      // Modifier le DOM
     /* document.getElementById('tomorrow-forecast-main').innerHTML = main1;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description1;
      document.getElementById('icon-weather-container1').innerHTML = icon1;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp1}°C`;*/
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}