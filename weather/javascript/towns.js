function getTowns(cityV)
{
    return fetch('./city.list.json')
    .then(async Response => {
        const city = await Response.json();
        city.filter(city => city.name.includes(cityV));

    })
    .catch(error => error)
}