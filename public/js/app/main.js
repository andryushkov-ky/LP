import Global from './global';


export default class Main extends Global {
    constructor () {
        super();

        this.eventsListener();
    }


    eventsListener() {
        const shadow = document.querySelector('.shadow');
        const mBtn = document.querySelector('.m-btn');
        const mClose = document.querySelector('.l-menu__m-close');


        // TODO use toggle
        shadow.addEventListener("click", () => {
          this.hideMenu();
        });

        mClose.addEventListener("click", () => {
            this.hideMenu();
        });

        mBtn.addEventListener("click", () => {
            this.openMenu();
        });
    }

    hideMenu() {
        const menu = document.querySelector('.l-menu--open');

        menu.classList.remove("l-menu--open");
    }

    openMenu() {
        const menu = document.querySelector('.l-menu');

        menu.classList.add("l-menu--open");
    }
}