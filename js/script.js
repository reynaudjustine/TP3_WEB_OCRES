
// Fonction appelée lors du click du bouton
function start() {
  //affiche meteo de la ville par defaut
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

  

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}



function startVille() {
  //afficher meteo jour J de la ville saisie 
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



      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function getThreeDaysForecast() {
  //afficher meteo des 3 jours suivant

  const ville = document.getElementById('city-input').value;
  
    // Création de l'objet apiWeather
  const apiWeather=new API_WEATHER(ville); 
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      for(var i=0;i<3;i++)
      {
        // On récupère l'information principal
      const main = data.list[i+1].weather[0].main;
      const description = data.list[i+1].weather[0].description;
      const temp = data.list[i+1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[i+1].weather[0].icon);



      // Modifier le DOM
      document.querySelectorAll('#today-forecast-main')[i+1].innerHTML = main;
      document.querySelectorAll('#today-forecast-more-info')[i+1].innerHTML = description;
      document.querySelectorAll('#icon-weather-container')[i+1].innerHTML = icon;
      document.querySelectorAll('#today-forecast-temp')[i+1].innerHTML = `${temp}°C`;

      }

      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function init() {
  
  //initialiser demain apres demain et le jour avant de saisir une ville

  // Création de l'objet apiWeather
  const apiWeather=new API_WEATHER('paris'); 
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      

      for(var i=0;i<3;i++)
      {
        // On récupère l'information principal
      const main = data.list[i+1].weather[0].main;
      const description = data.list[i+1].weather[0].description;
      const temp = data.list[i+1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[i+1].weather[0].icon);



      // Modifier le DOM
      document.querySelectorAll('#today-forecast-main')[i+1].innerHTML = main;
      document.querySelectorAll('#today-forecast-more-info')[i+1].innerHTML = description;
      document.querySelectorAll('#icon-weather-container')[i+1].innerHTML = icon;
      document.querySelectorAll('#today-forecast-temp')[i+1].innerHTML = `${temp}°C`;

      }

      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

  
}


function actualiser()
{
  startVille();
  getThreeDaysForecast();
}

function depart()
{
  start();
  init();
  getThreeDaysForecast();
}
