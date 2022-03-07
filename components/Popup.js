export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    this.removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  _handleClickPopupOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  _handleCloseButton = () => {
    this.close();
  };

  removeEventListeners() {
    this._popupElement
      .querySelector('.popup__close')
      .removeEventListener('click', this._handleCloseButton);
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupElement.removeEventListener(
      'click',
      this._handleClickPopupOverlayClose
    );
  }

  setEventListeners() {
    this._popupElement
      .querySelector('.popup__close')
      .addEventListener('click', this._handleCloseButton);
    document.addEventListener('keydown', this._handleEscClose);
    this._popupElement.addEventListener(
      'click',
      this._handleClickPopupOverlayClose
    );
  }
}
