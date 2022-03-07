export default class TitleItem {
  constructor(data, titleSelector) {
    this._titleSelector = titleSelector;
    this._section = data.section;
    this._title = data.title;
    this._subtitle = data.subtitle;
  }

  _getTemplate() {
    const titleElement = document
      .querySelector(this._titleSelector)
      .content.cloneNode(true);
    return titleElement;
  }

  generateTitle() {
    this._element = this._getTemplate();
    // this._element.querySelector(`.section`).classList.add(this._section);
    this._element.querySelector(`.section__title`).textContent = this._title;
    this._element.querySelector(`.section__subtitle`).textContent =
      this._subtitle;
    return this._element;
  }
}
