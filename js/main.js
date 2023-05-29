const burguerMenu = document.querySelector('.navbar__burguer-menu');
const expandMenu = document.querySelector('.navbar__links');
const burguerLines = document.getElementsByTagName('span');
const disableScroll = document.getElementsByTagName('body');

burguerMenu.addEventListener('click', () => {
    const ariaExpandedMenu = expandMenu.getAttribute('aria-expanded');
    // ariaExpandedMenu == 'false' ? expandMenu.setAttribute('aria-expanded', 'true') : expandMenu.setAttribute('aria-expanded', 'false');
    if (ariaExpandedMenu == 'false') {
        disableScroll[0].style.overflow = "hidden";
        expandMenu.setAttribute('aria-expanded', 'true');
    } else {
        expandMenu.setAttribute('aria-expanded', 'false');
        disableScroll[0].style.overflowY = "unset";
    }
    for (i = 0; i < burguerLines.length; i++) {
        const burguerLinesAttribute = burguerLines[i].getAttribute('aria-controls');
        if (burguerLinesAttribute == 'closed') {
            burguerLines[i].setAttribute('aria-controls', 'opened');
        } else {
            burguerLines[i].setAttribute('aria-controls', 'closed');
        }
    }
});
