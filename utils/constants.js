export const config = {
  inputSelector: '.form__input',
  selectSelector: '.form__select',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

export const ageCardArray = [
  {
    title: '3-5 years',
    background: 'age__color-bg_type_pink',
    text: 'A collection of activities and ideas to promote learning and development.',
    image: {
      src: './images/age_3_5.jpg',
      alt: 'Image of a toddler playing',
    },
  },
  {
    title: '6-9 years',
    background: 'age__color-bg_type_orange',
    text: 'Learning Activities for grasping new things.',
    image: {
      src: './images/age_6_9.jpg',
      alt: 'Image of a child doing a scientific experiment',
    },
  },
  {
    title: '10-12 years',
    background: 'age__color-bg_type_turq',
    text: 'Awesome Projects for Tween kids. Practicing skills in order to become better.',
    image: {
      src: './images/age_10_12.jpg',
      alt: 'Image of hands building a robot',
    },
  },
];

export const kitCardArray = [
  {
    type: '_type-science',
    image: {
      src: './images/science_icon.svg',
      alt: 'science icon of a vial',
    },
    title: 'Science Kit',
    description:
      'Kids learn to focus and to solve a problem. This Kit get them into basics of Astronomy, Math, Physics and Chemistry. It would make them imagine things, observe and be curious.',
    list: [
      'Scientific journal to read and fill',
      'Chemical experiments',
      'Water tubes maze',
      'DIY slime ingredients',
      'Robotics task',
      'Draw the planet map',
    ],
    list_bg: '#40A6A9;',
  },
  {
    type: '_type-art',
    image: {
      src: './images/art_icon.svg',
      alt: 'Icon of a color pallete',
    },
    title: 'Art Kit',
    description:
      'Art and craft activities are always a fun way to teach kids. This Kit will challenge children and provoke them into using imagination and creativity. Guide them as little as possible!',
    list: [
      'Special set of drawing paper',
      'DIY play-doh kit',
      'Origami paper and instructions',
      'Puzzles to paint',
      'Task for colouring',
      'Cross stitching set',
    ],
    list_bg: '#DFCD8D;',
  },
  {
    type: '_type-nature',
    image: {
      src: './images/nature_icon.svg',
      alt: 'icon of a leaf for the nature kit',
    },
    title: 'Nature Kit',
    description:
      'It helps children to observe and focus. The Kit will assist kids in noticing seasonal changes, natural processes, learn about humans and animals. Also, it will teach them survival tricks.',
    list: [
      'Seeds you can plant and grow',
      'Tracing task for the world maps',
      'Nature journal to fill in',
      'DIY experiment set',
      'Krafts with natual materials',
      'Dinosaur egg collection',
    ],
    list_bg: '#E87C8E;',
  },
  {
    type: '_type-surprise',
    image: {
      src: './images/surprise_icon.svg',
      alt: 'Icon of a magical boat',
    },
    title: 'Mystery Kit',
    description:
      "Every week a child will get a surprise kit, it could be science, arts or nature. It's mystery! Who doesn't like  surprise? Let our professionals surprise yourself and child with activities on our choise!",
    list: [
      'Creative projects',
      'DIY manuals',
      'Printed tasks to fill',
      '... and much more!',
    ],
    list_bg: '#EBA671;',
  },
];

export const freebieArray = [
  {
    image: {
      src: './images/coloring.jpg',
      alt: 'drawing of a ladybug',
    },
    caption: 'Coloring',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/ladybug.pdf',
  },
  {
    image: {
      src: './images/origami.jpg',
      alt: 'drawing of origami instructions',
    },
    caption: 'Origami',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/origami.pdf',
  },
  {
    image: {
      src: './images/writing.jpg',
      alt: 'image of a written page',
    },
    caption: 'Writing',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/writing.pdf',
  },
  {
    image: {
      src: './images/maze.jpg',
      alt: 'drawing of a maze in the shape of a snail',
    },
    caption: 'Maze',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/maze.pdf',
  },
];

export const navItemArray = [
  {
    href: '#subscribe',
    text: 'Subscribe',
    type: '_type_subscribe',
  },
  {
    href: '#kits',
    text: 'Subscription Kits',
    type: '',
  },
  {
    href: '#freebies',
    text: 'Free Downloads',
    type: '',
  },
  {
    href: '#about-us',
    text: 'About Us',
    type: '',
  },
];

export const titlesArray = [
  {
    section: 'subscribe',
    title: 'Choose the age group',
    subtitle:
      'We selected best age appropriate activities for your kid’s development',
  },
  {
    section: 'kits',
    title: 'Subscription kits',
    subtitle:
      'Get your weekly subscription and keep your kids busy for the whole week.',
  },
  {
    section: 'freebies',
    title: 'We also care about parents!',
    subtitle: 'Get FREE printable tasks and enjoy quiet moments!',
  },
];

export const hamburgerButton = document.querySelector('.nav__mobile-button');
export const navContainer = document.querySelector('.nav__container');
