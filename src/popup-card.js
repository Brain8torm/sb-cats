class PopupCard extends Popup {

  
  constructor(selectorTemplate, classes) {
    super(selectorTemplate, classes);
    console.log('PopupCard init');
  }

  open(data) {
    console.log('PopupCard open');
    //console.log('card data', data);
    
    const popupCardImageEl = this._popupElement.querySelector('.popup-card_image img');
    const popupCardTitleEl = this._popupElement.querySelector('.popup-card_title');
    const popupCardYearEl = this._popupElement.querySelector('.popup-card_year');
    const popupCardFavoriteEl = this._popupElement.querySelector('.popup-card_favorite');
    const popupCardRatingEl = this._popupElement.querySelector('.popup-card_rating .rating__value');
    const popupCardDescrEl = this._popupElement.querySelector('.popup-card_description');

    popupCardImageEl.src = data.image;
    popupCardImageEl.alt = data.name;

    popupCardTitleEl.textContent = data.name;
    popupCardYearEl.textContent = `Год: ${data.age}`;
    //popupCardFavoriteEl.textContent = `Любимчик ${data.favorite ? 'да' : 'нет'}`
    popupCardDescrEl.textContent = data.description;
    popupCardRatingEl.textContent = `${data.rate} / 10`;

    super.open();
  }
}
