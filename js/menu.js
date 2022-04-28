function Menu(config){
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
    this.icon = (typeof config.icon === 'string') ? document.querySelector(config.icon) : config.icon;
    this.btn.removeAttribute('style');

    var _this = this

    this.btn.addEventListener('click', openMenu);

    function openMenu(){
                _this.nav.classList.toggle('menu-opened');
                _this.icon.classList.toggle('fa-bars')
                _this.icon.classList.toggle('fa-x')
            }

}