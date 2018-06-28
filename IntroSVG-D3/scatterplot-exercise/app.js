let width = 800;
let height = 500;
let padding = 50;
let data = regionData.filter(mustHaveKeys);

let yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.subscribersPer100))
                .range([height - padding, padding]);

let xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.adultLiteracyRate))
                .range([padding, width - padding]);

let xAxis = d3.axisBottom(xScale)
                .tickSize(-height + 2 * padding)
                .tickSizeOuter(0);

let yAxis = d3.axisLeft(yScale)
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);

let colorScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.urbanPopulationRate))
                .range(['pink', 'blue']);

let rScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.medianAge))
                .range([5, 30]);

let svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

svg.append('g')
    .attr('transform', `translate(0, ${height - padding})`)
    .call(xAxis);

svg.append('g')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
        .attr('cx', d => xScale(d.adultLiteracyRate))
        .attr('cy', d => yScale(d.subscribersPer100))
        .attr('r', d => rScale(d.medianAge))
        .attr('fill', d => colorScale(d.urbanPopulationRate))
        .attr("stroke", "#fff")
        .style("opacity", 0.7);

svg.append('text')
    .attr('x', width / 2)
    .attr('y', height - padding)
    .attr('dy', '1.7em')
    .style('text-anchor', 'middle')
    .text('Literacy Rate, Age 15 and Up');

svg.append('text')
    .attr('x', width / 2)
    .attr('y', padding  )
    .attr('dy', '-1.5em')
    .style('text-anchor', 'middle')
    .text('Cellular Subscriptions vs. Literacy Rate');

svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', - height / 2)
    .attr('y', padding)
    .attr('dy', '-1.5em')
    .style('text-anchor', 'middle')
    .text('Cellular Subscriptions per 100 People');


function mustHaveKeys(obj) {
    let keys = [
        "subscribersPer100",
        "adultLiteracyRate",
        "medianAge",
        "urbanPopulationRate"
    ];
    return keys.every(value => obj[value] !== null);
}
