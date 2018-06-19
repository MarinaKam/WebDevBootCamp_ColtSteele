let height = 200;
let width = 600;
let mathHeight = () => Math.random() * 100 + 20 + 'px';
let barPadding = 10;
d3.select('#reset')
    .on('click', () => {
        d3.selectAll('#phrase, #count')
            .text('');
        d3.selectAll(".letter")
            .remove();
    });

 d3.select('form')
     .on('submit', () => {
         let input = d3.select('input');
         d3.event.preventDefault();
         if (input.property('value') === '') {
            alert('Input cannot be empty!!!')
        } else {
            let str = input.property('value');
            let newStr = str.split('').filter((value, index, self) => self.indexOf(value) === index).sort();

             // let letters = d3.select("#letters")
             //     .selectAll(".letter")
             //     .data(newStr, d => d);
             //
             // letters
             //     .classed("new", false)
             //     .exit()
             //     .remove();
             //
             // letters
             //     .enter()
             //     .append("div")
             //     .classed("letter", true)
             //     .classed("new", true)
             //     .merge(letters)
             //     .text(d => d)
             //     .style("width", '25px')
             //     .style("line-height", "20px")
             //     .style("margin-right", "5px")
             //     .style("height", mathHeight);
             //     input.property('value', '');
             //
             // d3.select('#phrase').text(`Analysis: ${str}`);
             //
             // d3.select('#count').text(`New characters: ${letters.enter().nodes().length}`);
             let barWidth = width / newStr.length - barPadding;

             let svg = d3.select('svg')
                 .attr('width', width)
                 .attr('height', height)
                 .selectAll('.letter')
                 .data(newStr, d => d);

             svg.classed("new", false).exit().remove();

             let svgLetters = svg.enter()
                 .append('g')
                     .classed("letter", true)
                     .classed("new", true);

             svgLetters.append('rect');
             svgLetters.append('text');

             svgLetters.merge(svg)
                 .select('rect')
                 .attr('width', barWidth)
                 .attr('height', mathHeight)
                 .attr('y', 0)
                 .attr('x', (d, i) => (barWidth + barPadding) * i)
                 .attr('transform', `matrix(1 0 0 -1 0 ${height})`);

             svgLetters.merge(svg)
                 .select('text')
                 .text(d => d)
                 .attr('x', (d, i) => ( barWidth + barPadding ) * i + barWidth / 2)
                 .attr('y', height - 10)
                 .attr('text-anchor', 'middle');
         }

     });
