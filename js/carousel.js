class Carousel {
    items;
    active;
    constructor(carousel, carouselItem, activeClass) {
        this.items = document.querySelectorAll(`.${carousel} > .${carouselItem}`);
        this.active = 0;
        this.activeClass = activeClass;
    }
    #next() {
        this.items[this.active].classList.toggle(this.activeClass);
        if (this.active === this.items.length - 1)
            this.active = 0;
        else
            this.active++;
        this.items[this.active].classList.toggle(this.activeClass);
    }
    run(interval, btNext, btPrev) {
        setInterval(this.#next.bind(this), interval);
    }
}
