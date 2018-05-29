// console.log(d3);
// console.log(d3.version);
// console.log(d3.selectAll('li').nodes());
// console.log(d3.selectAll('li').node());
// console.log(d3.select('#page-title').style('color'));
// console.log(d3.select('#page-title').text());

//Manipulating Selections
d3.select('#page-title').style('background-color', 'purple');
d3.select('#page-title')
    .style('background-color', '#000000')
    .style('color', '#fff')
    .attr('class', 'new-class')
    .text('D3 is Cool!');

d3.select('#page-title').classed('second-class', true);//add class
d3.select('#page-title').classed('second-class', false);//remove class

console.log(d3.select('#page-title').text());

//Selections and Callbacks
// d3.selectAll('li').style('font-size', () => Math.random() * 40 + 'px');
d3.select('.outer')
    .style('font-size', '18px')
    .style('color', 'grey')
    .select('div')
    .style('font-size', '22px')
    .style('opacity', '.7')
    .select('div')
    .style('font-size', '26px')
    .style('opacity', '.4');
d3.selectAll('li').style('color', (_, idx) => idx % 2 === 0 ? 'purple' : '#dd4b39');