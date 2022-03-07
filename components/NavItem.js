export default class NavItem {
  constructor(data, navItemSelector) {
    this._navItemSelector = navItemSelector;
    this._href = data.href;
    this._text = data.text;
    this._type = data.type;
  }

  _getTemplate() {
    const navItemElement = document
      .querySelector(this._navItemSelector)
      .content.querySelector('.nav__item')
      .cloneNode(true);
    return navItemElement;
  }

  _closeNav() {
    document.querySelector('.nav__container').classList.remove('nav_opened');
  }

  _setEventListeners = () => {
    this._element.addEventListener('click', this._closeNav);
  };

  generateNavItem() {
    this._element = this._getTemplate();
    this._setEventListeners(this._element);
    this._element.querySelector('.nav__link').href = this._href;
    this._element.querySelector('.nav__link').textContent = this._text;
    if (this._type) {
      this._element
        .querySelector('.nav__link')
        .classList.add(`nav__link${this._type}`);
    }
    return this._element;
  }
}
