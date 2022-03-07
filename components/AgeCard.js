export default class AgeCard {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._background = data.background;
    this._title = data.title;
    this._text = data.text;
    this._imageSrc = data.image.src;
    this._imageAlt = data.image.alt;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.age')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element
      .querySelector('.age__color-bg')
      .classList.add(this._background);
    this._element.querySelector('.age__title').textContent = this._title;
    this._element.querySelector('.age__text').textContent = this._text;
    this._element.querySelector('.age__image').src = this._imageSrc;
    this._element.querySelector('.age__image').alt = this._imageAlt;
    return this._element;
  }
}
