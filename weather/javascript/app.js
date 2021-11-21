








const URL = "api.openweathermap.org/data/2.5";
const key = "0525fe02cb6a5bf0dfd6b56948975b8e";


function getCurrentWeather(cityId)

{
  return  fetch(`${URL}/weather?id=${cityId}&appid={${key}}`)
  .then(response => response)
  .catch(error => error)
};

function getFiveDaysWeather(cityId)

{
  return  fetch(`${URL}/forecast?id=${cityId}&appid={${key}}`)
  .then(response => response)
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
  
  
  suggestionAddRemove(event.target.value.length);


  
  if(cityResult.length)
  {
    
  }
  else
  {
    const notFound = document.createElement('DIV');
    notFound.innerHTML = "<span> the city you looking for is not found </span>";
    suggestEl.appendChild(notFound);

  }


 


}
function closeSuggest(){
  // const suggestEl = document.getElementsByClassName('search__suggest')[0];
  // suggestEl.classList.remove('search__suggest--active');
  suggestionAddRemove(false)
  

}


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
