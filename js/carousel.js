function Carousel(config){
   
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;
    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext;

    var _this = this;
    var currentSlideIndex = 0;
    init();

    function init(){
        var show = _this.container.querySelectorAll('.show');

        [].forEach.call(show, function(slide){
            slide.classList.remove('show');
        })

        _this.itens[0].classList.add('show');
        _this.btnPrev.removeAttribute('style');
        _this.btnNext.removeAttribute('style');


        _this.btnNext.addEventListener('click', nextSlide);
        _this.btnPrev.addEventListener('click', prevSlide);


        function nextSlide(){
            if(currentSlideIndex >= _this.itens.length -1){
                currentSlideIndex = 0;
            }else{
                currentSlideIndex++
            }
            show = _this.container.querySelector('.show');
            show.classList.remove('show');
            
            _this.itens[currentSlideIndex].classList.add('show');
        }

        function prevSlide(){
            if(currentSlideIndex == 0){
                currentSlideIndex = _this.itens.length -1;
            }else{
                currentSlideIndex--
            }
            show = _this.container.querySelector('.show');
            show.classList.remove('show');

            _this.itens[currentSlideIndex].classList.add('show');
            
           

        }
            
        
    }

}
