let colors = {
    'PG-13': '#ff9000',
    'PG': '#f9ff00',
    'R': '#ff0000',
    'G': '#3cff00'
};

d3.select('#quotes')
    .selectAll('li')
    .data(quotes)
    .enter()
    .append('li')
    .style('margin-bottom', '10px')
    .style('padding', '10px')
    .style('font-size', d => d.quote.length < 25 ? '1.5em' : '1em')
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '3px')
    .text(d => `${d.quote} - ${d.movie} (${d.year})`);