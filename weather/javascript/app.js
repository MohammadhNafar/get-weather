







const URL = "api.openweathermap.org/data/2.5";
const key = "0525fe02cb6a5bf0dfd6b56948975b8e";







function getCurrentWeather(cityId)

{
  return  fetch(`https://${URL}/weather?id=${cityId}&appid=${key}`)
  .then(async response =>await response.json())
  .catch(error => error)
};

function getFiveDaysWeather(cityId)

{
  return  fetch(`https://${URL}/forecast?id=${cityId}&appid=${key}`)
  .then(async response =>await response.json())
  .catch(error => error)
};


function getTowns(cityV)
{
    return fetch('./javascript/city.list.json')
    .then(async response => {
        const city = await response.json();
        console.log('city: ', city);
      return  city.filter(city => city.name.toLowerCase().includes(cityV.toLowerCase()));

    })
    .catch(error => error)
}










 async function citySearch(event){
  const cityResult = await getTowns(event.target.value);
  const searchEl = document.getElementsByClassName('search')[0];
  const suggestEl = document.getElementsByClassName('search__suggest')[0];
  
  

//  async function selectCity(city){
//   const inputEl =document.getElementsByClassName('search__input')[0];
//   inputEl.value = city.name;
//   let id = city.id;

//   const response = await getCurrentWeather(id);
//   editWeather(response);
  
  


  
//   console.log("city selected",city,response);


// }










  suggestionAddRemove(event.target.value.length);

  const items = document.getElementsByClassName('search__values')[0];
  items && items.remove();
  const ul = document.createElement('UL');
      ul.classList.add('search__values');



  if(cityResult.length)
  {
    

    
    cityResult.forEach(city => {
      

      const el = document.createElement('LI');
      
      el.classList.add('search__values');
      el.setAttribute("onclick","getCityName(event)");
      el.id = city.id;
      el.innerText = city.name;
      ul.appendChild(el);
      //const valueEl = `<li class="search__values" onclick"${select()}" >${city.name}</li>`;
      //values += valueEl;
    });
    //values += `</ul>`;
    //const ul = document.createElement('UL');
    suggestEl.appendChild(ul);
    
  }
  else
  {

    
    const notFound = `<div class="notFound__message"><span> the city you looking for is not found </span></div>`;
    suggestEl.innerHTML=notFound;

  }


 


}
async function getCityName(event)
{
 //const response =  event.target.innerHTML;
 const response = await getCurrentWeather(event.target.id);
 console.log(response);

  const inputEl =document.getElementsByClassName('search__input')[0];
 inputEl.value = response.name;
 let id = response.id;

  editWeather(response);
  
  


   console.log("city selected",response);
}



function editWeather(weather)
{


  const titleEl = document.querySelector('.city-temperature__title');
  const temperatureEl = document.querySelector('.temperature__current-degree');
  const day = document.querySelector('.temperature__current-day');
  const pressureEl = document.querySelector('.pressure');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const iconSun = document.querySelector('.sun__icon');
  titleEl.innerHTML = `${weather.name}, ${weather.sys.country}`;
  temperatureEl.innerHTML = `${Math.round(weather.main.temp-273.15)}`;
  //day.innerHTML = moment(weather.dt, "X").format('dddd')
  console.log(weather.dt);

  iconSun.src = `http://openweathermap.org/img/wn/${weather.weather[0]}@2x.png`;
  humidity.innerHTML = `${weather.main.humidity}%`;
  pressureEl.innerHTML = `${weather.main.pressure}hPa`;
  //wind.innerHTML = `${}`

}





















function closeSuggest(){
  
 setTimeout( ()=> suggestionAddRemove(false),1000 ) 
  

}



 // age hide bood active mikone age nabod barmidare active ro
 function suggestionAddRemove(hide)
 {
  const suggestEl = document.getElementsByClassName('search__suggest')[0];
  if(hide)
  {
    suggestEl.classList.add('search__suggest--active');

  }


  
  else
  {
    suggestEl.classList.remove('search__suggest--active');

  }
  

 }

