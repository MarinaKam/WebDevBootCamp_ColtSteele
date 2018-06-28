let minYear = d3.min(birthData, d => d.year);
let maxYear = d3.max(birthData, d => d.year);
let width = 600;
let height = 600;

let continents = [];
birthData.forEach(el => {
   if (continents.indexOf(el.continent) === -1) {
       continents.push(el.continent);
   }
});

let colorScale = d3.scaleOrdinal()
                    .domain(continents)
                    .range(d3.schemeCategory10);

d3.select('svg')
            .attr('width', width)
            .attr('height', height)
        .append('g')
            .attr('transform', `translate(${width / 2} ${height / 2})`)
            .classed('chart', true);

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', () => makeGraph(+d3.event.target.value));

makeGraph(minYear);

function makeGraph(year) {
    let yearData = birthData.filter(d => d.year === year);

    let arcs = d3.pie()
        .value(d => d.births)
        //the same colors near to each other
        .sort((a, b) => a.continent < b.continent ? -1 : a.continent > b.continent ? 1 : a.births - b.births)
        (yearData);

    let path = d3.arc()
        .outerRadius(width / 3 - 10)
        .innerRadius(width / 20)
        .padAngle(0.02)
        .cornerRadius(4);

    let update = d3.select('.chart')
        .selectAll('.arc')
        .data(arcs);

    update
        .exit()
        .remove();

    update
        .enter()
        .append('path')
            .classed('arc', true)
        .merge(update)
            .attr('fill', d => colorScale(d.data.continent))
            .attr('stroke', 'black')
            .attr('d', path);
}