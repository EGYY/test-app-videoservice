const tabs = (tabNav, tabNavItem, tabContent, activeClass = 'active') => {
    const nav = document.querySelector(tabNav);
    const navItem = document.querySelectorAll(tabNavItem);
    const content = document.querySelectorAll(tabContent);

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        navItem[i].classList.add(activeClass);
    }

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        navItem.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    hideTabContent();
    showTabContent();

    nav.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-name');
        content.forEach((item, i) => {
            if (item.classList.contains(target)){
                hideTabContent();
                showTabContent(i);
            }
        })
    })
}

export default tabs;