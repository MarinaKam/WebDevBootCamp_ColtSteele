// d3.select('h1').on('click', () => console.log('it was clicked!'));
// d3.select('h1').on('click', null);

d3.selectAll('.note')
    .append('span')
    .classed('del', true)
    .text('x')
    .on('click', delElem);

d3.select('#new-note')
    .on('submit', () => {
        d3.event.preventDefault();
        let input = d3.select('input');
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
        }
});

function delElem() {
    d3.select(this.parentNode).remove();
}