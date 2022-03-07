export default class Freebie {
  constructor(data, freebieSelector) {
    this._freebieSelector = freebieSelector;
    this._imageSrc = data.image.src;
    this._imageAlt = data.image.alt;
    this._caption = data.caption;
    this._filePath = data.filepath;
  }

  _getTemplate() {
    const freebieElement = document
      .querySelector(this._freebieSelector)
      .content.querySelector('.freebie__item')
      .cloneNode(true);
    return freebieElement;
  }

  generateFreebie() {
    this._element = this._getTemplate();
    this._element.querySelector('.freebie__image').src = this._imageSrc;
    this._element.querySelector('.freebie__image').alt = this._imageAlt;
    this._element.querySelector('.freebie__caption').textContent =
      this._caption;
    this._element.querySelector('.freebie__download').href = this._filePath;
    return this._element;
  }
}
