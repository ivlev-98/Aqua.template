document.addEventListener("DOMContentLoaded", () => {
    let menu = new Menu('menu', '.pageNav > a');
    menu.closeOnClick();
    let carousel = new Carousel('carousel', 'carouselItem', 'active');
    carousel.run(4500, 'next', 'prev')
});
