(function(){
    var $body = document.querySelector('body');
        $body.classList.remove('no-js');
        $body.classList.add('js');

    var menu = new Menu({
        container:'.header__nav',
        toggleBtn:'.header__btnMenu',
        icon:'#icon'
    })

    var carousel = new Carousel({
        container:'.slideshow',
        itens: 'figure',
        btnPrev:'.prev-laptop',
        btnNext:'.next-laptop'
    })

    var quoteCarousel = new Carousel({
        container:'.quote-slideshow',
        itens:'figure',
        btnPrev:'.prev-quote',
        btnNext:'.next-quote'
    })
    
})()


    