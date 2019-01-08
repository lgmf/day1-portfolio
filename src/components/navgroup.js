const header = document.querySelector('.header');

class NavGroup extends HTMLElement {

  connectedCallback() {
    this.navItems = this.attributes.items || [];
    this.render();
  }

  buildLink(title, href = '#') {
    const link = document.createElement('a');
    link.href = href;
    link.innerText = title;
    link.classList.add('link');
    return link;
  }

  buildNavItems(navItems = []) {
    return navItems.reduce((prev, item) => {
      const listItem = document.createElement('li');
      const link = this.buildLink(item);
      listItem.classList.add('navitem');
      listItem.appendChild(link);

      return [...prev, listItem];
    }, []);
  }

  render() {
    const list = document.createElement('ul');

    list.classList.add('navgroup');
    this.buildNavItems(this.navItems).forEach(item => list.appendChild(item));

    this.parentElement.appendChild(list);
  }
}

try {
  customElements.define('app-nav-group', NavGroup)
} catch (err) {
  console.warn("This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!");
  console.log(err);
}
