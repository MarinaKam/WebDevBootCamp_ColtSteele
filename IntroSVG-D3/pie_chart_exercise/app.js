let width = 600;
let height = 600;
let minYear = d3.min(birthData, d => d.year);
let maxYear = d3.max(birthData, d => d.year);
let orderedMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];

let colors = [
    '#aec7e8', '#a7cfc9', '#9fd7a9', '#98df8a', '#bac78e',
    '#ddb092', '#ff9896', '#ffa48c', '#ffaf82', '#ffdd78',
    '#e4bf9d', '#c9c3c3'
];

let quarterColors = ['#1f77b4', '#2ca02c', '#d62728', '#ff7f0e'];

let colorScale = d3.scaleOrdinal()
                   .domain(orderedMonths)
                   .range(colors);

let svg = d3.select('svg')
        .attr('width', width)
        .attr('height', height);

svg
    .append('g')
        .attr('transform', `translate(${width / 2} ${height / 2})`)
        .classed('chart', true);

svg
    .append('g')
    .attr('transform', `translate(${width / 2} ${height / 2})`)
    .classed('inner-chart', true);

svg
    .append('text')
        .classed('title', true)
        .attr('x', width / 2)
        .attr('y', 30)
        .style('font-size', '2em')
        .style('text-anchor', 'middle');

makeGraph(minYear);

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', () => makeGraph(+d3.event.target.value));

function makeGraph(year) {
    let yearData = birthData.filter(d => d.year === year);

    let arcs = d3.pie()
                    .value(d => d.births)
                    .sort((a, b) => orderedMonths.indexOf(a.month) - orderedMonths.indexOf(b.month));

    let innerArcs = d3.pie()
                        .value(d => d.births)
                        .sort((a, b) => a.quarter - b.quarter);

    let path = d3.arc()
                .outerRadius(width / 2 - 40)
                .innerRadius(width / 4);

    let innerPath = d3.arc()
                .innerRadius(0)
                .outerRadius(width / 4);


    let update = d3.select('.chart')
                   .selectAll('.arc')
                   .data(arcs(yearData));

    let inner = d3.select('.inner-chart')
                    .selectAll('.arc')
                    .data(innerArcs(getDataByQuarter(yearData)));

    update
        .enter()
        .append('path')
            .classed('arc', true)
            .attr('fill', d => colorScale(d.data.month))
        .merge(update)
            .attr('d', path);

    inner
        .enter()
        .append('path')
            .classed('arc', true)
            .attr('fill', (d, i) => quarterColors[i])
        .merge(inner)
            .attr('d', innerPath);

    d3.select('.title')
        .text(`Births by months and quarter for ${year}`)
}

function getDataByQuarter(data) {
    let quarterTallies = [0, 1, 2, 3].map(n => ({quarter: n, births: 0}));
    data.forEach(el => {
        let quarter = Math.floor(orderedMonths.indexOf(el.month) / 3);
        quarterTallies[quarter].births += el.births;
    });
    return quarterTallies;
}
