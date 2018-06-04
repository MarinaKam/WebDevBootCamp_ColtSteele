document.addEventListener('DOMContentLoaded', () => {
    let menuLink = d3.select('.menu-link'),
        menu = d3.select('#menu');
    menuLink.on('click', () => {
       menuLink.classed('active', !menuLink.classed('active'));
       menu.classed('active', !menu.classed('active'));
    });
});