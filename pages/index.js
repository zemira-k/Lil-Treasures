import {
  freebieArray,
  kitCardArray,
  ageCardArray,
  navItemArray,
  titlesArray,
  hamburgerButton,
  navContainer,
  config,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import AgeCard from '../components/AgeCard.js';
import KitCard from '../components/KitCard.js';
import Freebie from '../components/Freebie.js';
import NavItem from '../components/NavItem.js';
import TitleItem from '../components/TitleItem.js';
import FormValidator from '../components/FormValidator.js';

const formValidator = new FormValidator(
  config,
  document.querySelector('.popup_type_form')
);
formValidator.enableValidation();

const toggleNav = () => {
  if (!navContainer.classList.contains('nav_opened')) {
    navContainer.classList.add('nav_opened');
  } else {
    navContainer.classList.remove('nav_opened');
  }
};

hamburgerButton.addEventListener('click', toggleNav);

const navItems = new Section(
  {
    data: navItemArray,
    renderer: (data) => {
      const navItemInstance = new NavItem(data, '#nav-item-template');
      const navItemElement = navItemInstance.generateNavItem();
      navItems.setItem(navItemElement);
    },
  },
  '.nav__container'
);

navItems.renderer();

const popupForm = new PopupWithForm('.popup');

function openFormPopup() {
  formValidator.resetValidation();
  popupForm.open();
}
const kitsCard = new Section(
  {
    data: kitCardArray,
    renderer: (data) => {
      const cardInstance = new KitCard(data, '#kit-card-template', {
        handlerOpenForm: openFormPopup,
      });
      const cardElement = cardInstance.generateCard();
      kitsCard.setItem(cardElement);
    },
  },
  '.kits__card-container'
);

kitsCard.renderer();

const freebie = new Section(
  {
    data: freebieArray,
    renderer: (data) => {
      const freebieInstance = new Freebie(data, '#freebie-template');
      const freebieElement = freebieInstance.generateFreebie();
      freebie.setItem(freebieElement);
    },
  },
  '.freebie__list'
);

freebie.renderer();

const ageCard = new Section(
  {
    data: ageCardArray,
    renderer: (data) => {
      const cardInstance = new AgeCard(data, '#age-card-template');
      const cardElement = cardInstance.generateCard();
      ageCard.setItem(cardElement);
    },
  },
  '.subscribe__list'
);

ageCard.renderer();

const titleSetup = (data) => {
  const titles = new TitleItem(data, '#title-template');
  return titles;
};

const populateTitles = (title) => {
  const { section: sectionName } = title;
  const titleSection = new Section(
    {
      data: titlesArray,
      renderer: (data) => {
        const { section: sectionInstanceName } = data;
        if (sectionInstanceName == sectionName) {
          titleSection.prependItem(titleSetup(data).generateTitle());
        }
      },
    },
    `.${sectionName}`
  );
  titleSection.renderer();
};

titlesArray.forEach((title) => {
  populateTitles(title);
});
