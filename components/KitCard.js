export default class KitCard {
  constructor(data, cardSelector, { handlerOpenForm }) {
    this._cardSelector = cardSelector;
    this._type = data.type;
    this._imageSrc = data.image.src;
    this._imageAlt = data.image.alt;
    this._title = data.title;
    this._description = data.description;
    this._list = data.list;
    this._listbg = data.list_bg;
    this._handlerOpenForm = handlerOpenForm;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.kits__card')
      .cloneNode(true);
    return cardElement;
  }

  _addAnimation = () => {
    this._element.querySelector('.kits__card-image').classList.add('playful');
  };

  _removeAnimation = () => {
    this._element
      .querySelector('.kits__card-image')
      .classList.remove('playful');
  };

  _setEventListeners() {
    const card = this._element;
    const submitButton = this._element.querySelector('.button_pink');
    card.addEventListener('mouseover', this._addAnimation);
    card.addEventListener('mouseout', this._removeAnimation);
    submitButton.addEventListener('click', this._handlerOpenForm);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(this._element);
    this._element.classList.add(`kits__card${this._type}`);
    this._element.querySelector('.kits__card-image').src = this._imageSrc;
    this._element.querySelector('.kits__card-image').alt = this._imageAlt;
    this._element.querySelector('.kits__card-title').textContent = this._title;
    this._element.querySelector('.kits__card-description').textContent =
      this._description;
    this._element
      .querySelector('.kits__card-contents')
      .setAttribute('style', `background-color: ${this._listbg}`);
    this._list.forEach((item) => {
      const listItem = document.createElement('li');
      const listItemTextNode = document.createTextNode(item);
      listItem.classList.add('kits__card-contents_list-item');
      listItem.appendChild(listItemTextNode);
      this._element
        .querySelector('.kits__card-contents_list')
        .appendChild(listItem);
    });

    return this._element;
  }
}
