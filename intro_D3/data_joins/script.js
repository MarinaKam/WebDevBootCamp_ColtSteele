let colors = {
    'PG-13': '#ff9000',
    'PG': '#f9ff00',
    'R': '#ff0000',
    'G': '#3cff00'
};

let listItem = d3.select("#quotes")
    .selectAll("li");
appendStyle(listItem);

let removeBtn = d3.select("#remove");
removeBtn.on('click', () => {
    let nonRQuotes = quotes.filter(movie => movie.rating !== 'R');
    d3.selectAll("li")
        .data(nonRQuotes, d => d.quote)
        .exit()
        .remove();
    removeBtn.remove();
});

let addBtn = d3.select("#add");
addBtn.on('click', () => {
    quotes = quotes.concat(newQuotes);

    let newQuotesBody = d3.select("#quotes")
        .selectAll("li")
        .data(quotes);
    newQuotesBody
        .enter()
        .append('li')
        .text(d => `${d.quote} - ${d.movie} (${d.year})`)
        .style("list-style", "none")
        .style(`margin`, `20px`)
        .style(`padding`, `20px`)
        .style(`font-size`, d => d.quote.length < 25 ? "2em" : "1em")
        .style(`background-color`, d => colors[d.rating])
        .style(`border-radius`, `8px`)
        .merge(newQuotesBody)
        .style('color', '#5599ff');
    addBtn.remove();
});

function appendStyle(selection) {
    return selection
        .data(quotes)
        .enter()
        .append('li')
        .text(d => `${d.quote} - ${d.movie} (${d.year})`)
        .style("list-style", "none")
        .style(`margin`, `20px`)
        .style(`padding`, `20px`)
        .style(`font-size`, d => d.quote.length < 25 ? "2em" : "1em")
        .style(`background-color`, d => colors[d.rating])
        .style(`border-radius`, `8px`);
}