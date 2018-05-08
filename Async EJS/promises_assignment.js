/* global $ */
function getMostFollowers(...arg) {
    let url = 'https://api.github.com/users/';
    let urls = arg.map(name => $.getJSON(url + name));
    return Promise.all(urls)
        .then(data => {
            let maxFoll = data.sort((a, b) => a.followers < b.followers)[0];
            return `${maxFoll.name} has the most followers with ${maxFoll.followers}`;
        });
}

async function hasMostFollowers(...arg) {
    let url = 'https://api.github.com/users/';
    let urls = arg.map(name => $.getJSON(url + name));
    let result = await Promise.all(urls);
    let max = result.sort((a,b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers`;
}

async function starWars(num) {
    let str = '';
    let result = await $.getJSON(`https://swapi.co/api/people/${num}/`);
    str += `${result.name} is featured in `;

    let movie = result.films[0];
    let moreResults = await $.getJSON(movie);
    str += `${moreResults.title}, directed by ${moreResults.director}`;
    let planetData = moreResults.planets[0];
    let finalResults = await $.getJSON(planetData);
    str += `and it takes place on ${finalResults.name}`;
    return str;
}

// Promise.all([...arg]);
console.log(getMostFollowers('elie','tigarcia','colt'));

function starWarsString(num) {
    let str = '';
    let url = 'https://swapi.co/api/people/';
    return $.getJSON(`https://swapi.co/api/people/${num}/`)
        .then(data => {
            str += `${data.name} is featured in `;
            let filmData = data.films[0];
            return $.getJSON(filmData);
        })
        .then(function(res){
            str += `${res.title}, directed by ${res.director} `;
            let planetData = res.planets[0];
            return $.getJSON(planetData);
        })
        .then(function(res){
            str += `and it takes place on ${res.name}`;
            return str;
        }).then(function(finalString){
            return finalString;
        });
}

starWarsString(3).then(function(data){
    console.log(data);
});
