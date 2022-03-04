class Menu {
    switcher;
    links;
    constructor(switcherSelector, linksSelector) {
        this.switcher = document.getElementById(switcherSelector);
        this.links = document.querySelectorAll(linksSelector);
    }
    closeOnClick() {
        this.links.forEach((val) => {
            val.addEventListener('click', () => {
                this.switcher.checked = false;
            });
        });
    }
}
