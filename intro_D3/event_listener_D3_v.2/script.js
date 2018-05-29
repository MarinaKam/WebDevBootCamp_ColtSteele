// d3.select('h1').on('click', () => console.log('it was clicked!'));
// d3.select('h1').on('click', null);

d3.select('.remove')
    .on('click', () => {
       d3.selectAll('.note')
           .remove();
    });

d3.select('.lucky')
    .on('click', () => {
        d3.selectAll('.note')
            // .style('font-size', () => Math.random() * 40 + 'px')
            .style('color', () => `hsl(${Math.random() * 360}, 100%, 50%)`);
    });

d3.selectAll('.note')
    .append('span')
    .classed('del', true)
    .text('x')
    .on('click', delElem);


let input = d3.select('input');
let preview = d3.select('.preview');

d3.select('#new-note')
    .on('submit', () => {
        d3.event.preventDefault();
        //appending elements
        if (input.property('value') === '') {
            alert('Input cannot be empty!!!')
        } else {
            d3.select('#notes')
                .append('p')
                    .classed('note', true)
                    .text(input.property('value'))
                    .append('span')
                        .classed('del', true)
                        .text('x')
                        .on('click', delElem);
            input.property('value', '');
            setPreview('');
        }
});

input.on('input', () => {
   let note = d3.event.target.value;
   setPreview(note);
});

function delElem() {
    d3.select(this.parentNode).remove();
}

function setPreview(val) {
    preview.text(val)
        .classed('hide', val === '');
}