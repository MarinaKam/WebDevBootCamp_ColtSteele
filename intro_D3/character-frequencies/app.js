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
            let newStr = str.split('')
                 .filter((value, index, self) => self.indexOf(value) === index).sort();

             d3.select('#phrase').text(`Analysis: ${str}`);

             d3.select('#count').text(`New characters: ${newStr.length}`);

             let letters = d3.select("#letters")
                 .selectAll(".letter")
                 .data(newStr, d => d);

             letters
                 .classed("new", false)
                 .exit()
                 .remove();

             letters
                 .enter()
                 .append("div")
                 .classed("letter", true)
                 .classed("new", true)
                 .merge(letters)
                 .text(d => d)
                 .style("width", "20px")
                 .style("line-height", "20px")
                 .style("margin-right", "5px")
                 .style("height", () => Math.random() * 100 + 10 + 'px');
                 input.property('value', '');
         }


     });
