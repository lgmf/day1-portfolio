const header = document.querySelector('.header');

class Header extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  handleScroll(header) {
    window.addEventListener('scroll', () => {
      const topLimit = 10;
      const scrollTop = window.scrollY;

      scrollTop > topLimit
        ? header.classList.add('-scrolled')
        : header.classList.remove('-scrolled');
    });
  }

  buildLink(title, href = '#') {
    const link = document.createElement('a');
    link.href = href;
    link.innerText = title;
    link.classList.add('link');
    return link;
  }

  buildNavGroup() {
    const navGroup = document.createElement('app-nav-group');
    navGroup.attributes.items = [
      'who',
      'what',
      'where'
    ];
    return navGroup;
  }

  render() {
    const header = document.createElement('header');
    const link = this.buildLink('me');
    const navGroup = this.buildNavGroup();

    header.classList.add('header');
    header.appendChild(link);
    header.appendChild(navGroup);

    this.handleScroll(header);

    this.parentElement.appendChild(header);
  }
}

try {
  customElements.define('app-header', Header)
} catch (err) {
  console.warn("This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!");
  console.log(err);
}
