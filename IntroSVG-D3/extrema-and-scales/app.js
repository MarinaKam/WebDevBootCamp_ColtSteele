// let minYear = birthData[0].year;
let minYear = d3.min(birthData, d => d.year);
// let maxYear = birthData[birthData.length - 1].year;
let maxYear = d3.max(birthData, d => d.year);
let width = 600;
let height = 600;
let barPadding = 10;
let numBars = 12;
let barWidth = width / numBars - barPadding;
let maxBirth = d3.max(birthData, d => d.births);

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(d => d.year === minYear))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return d.births / maxBirth * height;
    })
    .attr("y", function(d) {
      return height - d.births / maxBirth * height;
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");

d3.select("input")
    .on("input", function() {
      let year = +d3.event.target.value;
      d3.selectAll("rect")
          .data(birthData.filter(d => d.year === minYear))
          .attr("height", function(d) {
            return d.births / maxBirth * height;
          })
          .attr("y", function(d) {
            return height - d.births / maxBirth * height;
          });
    });