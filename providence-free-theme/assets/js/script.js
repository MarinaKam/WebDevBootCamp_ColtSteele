document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', function(e) {
        //scroll top
        if(document.scrollingElement.scrollTop > 20) {
            d3.select('.header-nav').classed('active', true);
        } else {
            d3.select('.header-nav').classed('active', false);
        }
        (document.scrollingElement.scrollTop >= 450) ? d3.select('.top-btn').classed('top-active', true) : d3.select('.top-btn').classed('top-active', false);

        d3.select('.top-btn').on('click', () => scrollTo(document.body, 0, 1250));

        function scrollTo(element, to, duration) {
            let start = element.scrollTop,
                change = to - start,
                currentTime = 0,
                increment = 20;

            let animateScroll = function(){
                currentTime += increment;
                let val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }

//t = current time
//b = start value
//c = change in value
//d = duration
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };


    });

    d3.select('body').append('div')
        .attr('class', 'top-btn')
        .style('position', 'fixed')
        .style('bottom', '10%')
        .style('right', '5%')
        .style('z-index', '111')
        .append('i')
        .attr('class', 'fas fa-arrow-up');

    d3.select('.alert-msg').on('click', () => d3.select('.alert').remove());

    d3.selectAll('a[href="#"]').on('click', () => {
        // d3.event.preventDefault();
    });
    //Hidden Menu
    d3.select('.open-btn').on('click', () => {
        d3.select("#hidden-nav")
            .style('left', '0');
    });

    d3.select('.cloth-btn').on('click', () => {
        d3.select("#hidden-nav")
            .style('left', '-320px');
    });

    // Wow Animations
    let wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });
    wow.init();

    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //carousel
    let slideIndex = 2;
    let auto;
    let x = d3.selectAll("[class*='testimonials-cnt__']").nodes();
    showDivs(slideIndex);

    d3.select('.left').on('click',() => {
        d3.event.preventDefault();
        plusDiv(-1);

    });

    d3.select('.right').on('click', () => {
        d3.event.preventDefault();
        plusDiv(1);
    });

    d3.select('.demo-first').on('click', () => currentDiv(1));
    d3.select('.demo-second').on('click', () => currentDiv(2));
    d3.select('.demo-third').on('click', () => currentDiv(3));

    function plusDiv(n) {
        if (n > x.length) slideIndex = 1;
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
        if(n < 1) slideIndex = x.length;
        showDivs(slideIndex = n);
    }

    function showDivs(n) {
        startCarouselTimeout();
        let classIsSet = 'big';
        let dots = d3.selectAll("[class*='demo-']").nodes();
        if (n > x.length) {slideIndex = 1}
        if (n < 1) slideIndex = x.length;
        x.forEach(el => d3.select(el).style('display', 'none').classed('slide', false));
        dots.forEach(el => d3.select(el).classed(classIsSet, false));
        d3.select(x[slideIndex-1]).style('display', 'block').classed('slide', true);
        d3.select(dots[slideIndex-1]).classed(classIsSet, true);
    }

    function startCarouselTimeout() {
        clearTimeout(auto);
        auto = setTimeout(() => {
            plusDiv(1);
        },3000);
    }


    //Switcher block
    d3.select('.switcher__individual').classed('switched', true);
    d3.select('.switcher-block__starter').classed('switcher-active', true);

    d3.selectAll('.switcher__individual, .switcher-block__starter').on('click', () => startSwitcher());
    d3.selectAll('.switcher__company, .switcher-block__pro').on('click', () => proSwitcher());

    function startSwitcher() {
        d3.select('.switcher__individual').classed('switched', true);
        d3.selectAll('.switcher-toggles, .switcher__company').classed('switched', false);
        d3.selectAll('.switcher-block__pro').classed('switcher-active', false);
        d3.select('.switcher-block__starter').classed('switcher-active', true);
    }

    function proSwitcher() {
        d3.select('.switcher__individual').classed('switched', false);
        d3.selectAll('.switcher__company, .switcher-toggles').classed('switched', true);
        d3.select('.switcher-block__pro').classed('switcher-active', true);
        d3.select('.switcher-block__starter').classed('switcher-active', false);
    }



});