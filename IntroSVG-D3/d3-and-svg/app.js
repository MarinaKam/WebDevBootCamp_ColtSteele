let minYear = d3.min(birthData, data => data.year);
let maxYear = d3.max(birthData, data => data.year);
let maxBirth =  d3.max(birthData, data => data.births);
let width = 600;
let height = 600;
let barPadding = 10;
let numBars = 12;
let barWidth = width / numBars - barPadding;

let yScale = d3.scaleLinear()
    .domain([0, maxBirth])
    .range([height, 0]);

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('rect')
  .data(birthData.filter(d => d.year === minYear))
  .enter()
  .append('rect')
    .attr('width', barWidth)
    .attr('height', d => height - yScale(d.births))
    .attr('y', d => yScale(d.births))
    .attr('x', (d, i) => (barWidth + barPadding) * i)
    .attr('fill', 'purple');

d3.select('input')
    .on('input', () => {
        let year = +d3.event.target.value;
        d3.selectAll('rect')
            .data(birthData.filter(d => d.year === year))
            .attr('height', d => height - yScale(d.births))
            .attr('y', d => yScale(d.births));
    });