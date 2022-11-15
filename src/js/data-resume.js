const dataResume = {
  id: 1,
  photo: 'http://195.72.145.106/andrii_sereda.jpg',
  name: {
    en: 'Andrii Sereda',
    ua: 'Андрій Середа',
  },
  profesion: {
    en: 'Front-End Developer, Hardware developer',
    ua: 'Front-End Developer, Hardware developer',
  },
  description: {
    en: `Full cycle of device development, microcontroller firmware, printed
        circuit boards of devices, design and development of radio component
        cases. Website development and support.`,
    ua: `Повний цикл розробки приладів, програмування мікроконтроллерів, виготовлення друкованих 
        плат приладів, моделювання та виготовлення на 3д принтері корпусів радіоелектронних компоннтів.
        Розробка вебсайтів та їх підтримка.`,
  },
  contacts: {
    en: [
      {
        name: 'telephone',
        shotName: 'T:',
        title: '+3-8-067-621-00-56',
        href: 'tel:+380676210056',
      },
      {
        name: 'email',
        shotName: 'M:',
        title: 'a.a.sereda@ukr.net',
        href: 'mailto:a.a.sereda@ukr.net',
      },
      {
        name: 'web-site',
        shotName: 'S:',
        title: 'resume web site',
        href: 'http://195.72.145.106',
      },
    ],
    ua: [
      {
        name: 'telephone',
        shotName: 'T:',
        title: '+3-8-067-621-00-56',
        href: 'tel:+380676210056',
      },
      {
        name: 'email',
        shotName: 'M:',
        title: 'a.a.sereda@ukr.net',
        href: 'mailto:a.a.sereda@ukr.net',
      },
      {
        name: 'web-site',
        shotName: 'S:',
        title: 'web site резюме',
        href: 'http://195.72.145.106',
      },
    ],
  },
  experienceProject: {
    en: [
      {
        id: 1,
        name: 'Incubator control unit v5.0.4',
        tech: ['C++', 'ArduinoIDE'],
        link: 'https://github.com/SeredaAndrey/rab_prog_incubator_V5_0_4',
      },
      {
        id: 2,
        name: 'Incubator control unit V6.2 mini',
        tech: ['C++', 'ArduinoIDE'],
        link: 'https://github.com/SeredaAndrey/rab_prog_incubator_V6_2_mini_NOT_PID_engl',
      },
      {
        id: 3,
        name: 'Underfloor heating controller v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/controller_hot_flore-v2.0-with-MQTT',
      },
      {
        id: 4,
        name: 'Boller controller v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/controller_for_boller-v2.0-with-MQTT-and-DS18b20',
      },
      {
        id: 5,
        name: 'Room temperature controller v2.0 with MQTT TM1637',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/room-controller-v2.0-with-MQTT-DS18b20-and-TM1637',
      },
      {
        id: 6,
        name: 'Room temperature controller v2.0 with MQTT OLED',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/room_controller-v2.0-with-MQTT-DS18b20-and-OLED',
      },
      {
        id: 7,
        name: 'Radiator controller v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/hot-panel-v2.0-with-MQTT-with-MQTTcontroling',
      },
      {
        id: 8,
        name: 'This resume project',
        tech: ['HTML', 'CSS', 'JS'],
        link: 'https://github.com/SeredaAndrey/resume',
      },
    ],
    ua: [
      {
        id: 1,
        name: 'Блок управління інкубатором v5.0.4',
        tech: ['C++', 'ArduinoIDE'],
        link: 'https://github.com/SeredaAndrey/rab_prog_incubator_V5_0_4',
      },
      {
        id: 2,
        name: 'Блок управління інкубатором V6.2 mini',
        tech: ['C++', 'ArduinoIDE'],
        link: 'https://github.com/SeredaAndrey/rab_prog_incubator_V6_2_mini_NOT_PID_engl',
      },
      {
        id: 3,
        name: 'Контроллер управління теплою підлогою v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/controller_hot_flore-v2.0-with-MQTT',
      },
      {
        id: 4,
        name: 'Контроллер управлюння котлом v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/controller_for_boller-v2.0-with-MQTT-and-DS18b20',
      },
      {
        id: 5,
        name: 'Кiмнатний температурний контроллер v2.0 with MQTT TM1637',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/room-controller-v2.0-with-MQTT-DS18b20-and-TM1637',
      },
      {
        id: 6,
        name: 'Кiмнатний температурний контроллер v2.0 with MQTT OLED',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/room_controller-v2.0-with-MQTT-DS18b20-and-OLED',
      },
      {
        id: 7,
        name: 'Контроллер управління радіатором опалення v2.0 with MQTT',
        tech: ['C++', 'ArduinoIDE', 'HTML'],
        link: 'https://github.com/SeredaAndrey/hot-panel-v2.0-with-MQTT-with-MQTTcontroling',
      },
      {
        id: 8,
        name: 'Проєкт цього резюме',
        tech: ['HTML', 'CSS', 'JS'],
        link: 'https://github.com/SeredaAndrey/resume',
      },
    ],
  },
  experienceWork: {
    en: [
      {
        id: 8,
        nameCompany: `LCC "LMMP"`,
        position: 'PM. Chief Engineer Project',
        startDurationWork: 'April 2022',
        endDurationWork: 'up to now',
        city: 'Lviv',
        country: 'Ukraine',
        responsibilities: [
          'Design team management',
          'Maintenance of construction documentation',
        ],
      },
      {
        id: 7,
        nameCompany: `LCC "DEAS Construction"`,
        position: 'Civil Engineer, Chief Engineer',
        startDurationWork: 'August 2021',
        endDurationWork: 'April 2022',
        city: 'Mariupol',
        country: 'Ukraine',
        responsibilities: [
          'Design team management',
          'Maintenance of construction documentation',
          'Company management',
        ],
      },
      {
        id: 6,
        nameCompany: `LCC "AZOVTECHGAZ"`,
        position: 'Civil engineer, designer of the POB group',
        startDurationWork: 'July 2020',
        endDurationWork: 'August 2021',
        city: 'Mariupol',
        country: 'Ukraine',
        responsibilities: [
          'Development of project documentation in the field of preparation for production',
        ],
      },
      {
        id: 5,
        nameCompany: `LCC "MBK"PROMBUDSERVICE"`,
        position: 'Technical director, Director',
        startDurationWork: 'April 2019',
        endDurationWork: 'July 2019',
        city: 'Kyiv',
        country: 'Ukraine',
        responsibilities: [
          'Construction site management',
          'Maintenance of construction documentation',
          'Company management',
        ],
      },
      {
        id: 4,
        nameCompany: `LCC "TONDO"`,
        position: 'Head of production and technical department',
        startDurationWork: 'November 2010',
        endDurationWork: 'April 2019',
        city: 'Mariupol',
        country: 'Ukraine',
        responsibilities: [
          'Conducting construction projects',
          'Maintaining project documentation',
          'Maintaining budget documentation',
          'Department management',
        ],
      },
      {
        id: 3,
        nameCompany: `Building hypermarket OBI`,
        position: 'Head of the warehouse and product display',
        startDurationWork: 'October 2009',
        endDurationWork: 'September 2010',
        city: 'Mariupol',
        country: 'Ukraine',
        responsibilities: [
          'Personnel management of the product display department',
          'Personnel management of the goods acceptance department',
          'Maintaining warehouse documentation',
        ],
      },
      {
        id: 2,
        nameCompany: `LCC "SAS LTD"`,
        position: 'Head of the construction site, Chief Engineer, Director',
        startDurationWork: 'February 2003',
        endDurationWork: 'March 2009',
        city: 'Mariupol',
        country: 'Ukraine',
        responsibilities: [
          'Construction site management',
          'Maintenance of construction documentation',
          'Company management',
        ],
      },
      {
        id: 1,
        nameCompany: `LCC "MKS"`,
        position: 'Service engineer repair engineer',
        startDurationWork: 'November 2001',
        endDurationWork: 'February 2003',
        city: 'Kharkiv',
        country: 'Ukraine',
        responsibilities: [
          'Repair of office equipment',
          'Software installation and configuration',
        ],
      },
    ],
    ua: [
      {
        id: 8,
        nameCompany: `ТОВ "ЛММП"`,
        position: 'ПМ. Головний інженер проєкту',
        startDurationWork: 'Квітень 2022',
        endDurationWork: 'по сьогодняшній день',
        city: 'Львів',
        country: 'Україна',
        responsibilities: [
          'Керування группою конструкторів',
          'Ведення проектної документації',
        ],
      },
      {
        id: 7,
        nameCompany: `ТОВ "DEAS Construction"`,
        position: 'Інженер будівельник, Головний інженер',
        startDurationWork: 'Серпень 2021',
        endDurationWork: 'Квітень 2022',
        city: 'Маріуполь',
        country: 'Україна',
        responsibilities: [
          'Керування группою конструкторів',
          'Ведення проектної документації',
          'Управління копанією',
        ],
      },
      {
        id: 6,
        nameCompany: `ТОВ "АЗОВТЕХГАЗ"`,
        position: 'Інженер будівельник, розробник группи ПОБ',
        startDurationWork: 'Липень 2020',
        endDurationWork: 'Серпень 2021',
        city: 'Маріуполь',
        country: 'Україна',
        responsibilities: [
          'Розробка проектної документації з підготовки виробництва',
        ],
      },
      {
        id: 5,
        nameCompany: `ТОВ "МБК"ПРОМБУДСЕРВІС"`,
        position: 'Технічний директор, Директор',
        startDurationWork: 'Квітень 2019',
        endDurationWork: 'Липень 2019',
        city: 'Київ',
        country: 'Україна',
        responsibilities: [
          'Керівництво будівельним майданчиком',
          'Ведення проектної документації',
          'Управління копанією',
        ],
      },
      {
        id: 4,
        nameCompany: `ТОВ "TONDO"`,
        position: 'Head of production and technical department',
        startDurationWork: 'November 2010',
        endDurationWork: 'April 2019',
        city: 'Маріуполь',
        country: 'Україна',
        responsibilities: [
          'Ведення будівельних проектів',
          'Ведення проектної документації',
          'Підготовка тендерної документації',
          'Управління відділом',
        ],
      },
      {
        id: 3,
        nameCompany: `Будівельний гіпермаркет OBI`,
        position: 'Керівник складу та відділу викладки',
        startDurationWork: 'Жовтень 2009',
        endDurationWork: 'Вересень 2010',
        city: 'Маріуполь',
        country: 'Україна',
        responsibilities: [
          'Управління персоналом відділу викладки товару',
          'Управління персоналом відділу приймання товарів',
          'Ведення складської документації',
        ],
      },
      {
        id: 2,
        nameCompany: `ТОВ "SAS LTD"`,
        position: 'Нач.будівельної дільниці, гол.інженер, директор',
        startDurationWork: 'Лютий 2003',
        endDurationWork: 'Березень 2009',
        city: 'Маріуполь',
        country: 'Україна',
        responsibilities: [
          'Керівництво будівельним майданчиком',
          'Ведення проектної документації',
          'Управління копанією',
        ],
      },
      {
        id: 1,
        nameCompany: `ТОВ "MKS"`,
        position: 'Інженер сервісного центру',
        startDurationWork: 'Листопад 2001',
        endDurationWork: 'Лютий 2003',
        city: 'Харків',
        country: 'Україна',
        responsibilities: [
          'Ремонт офісної техніки',
          'Встановлення та налаштування програмного забезпечення',
        ],
      },
    ],
  },
  education: {
    en: [
      {
        id: 1,
        name: 'Priasov State Technical University (PSTU)',
        profession: 'Сivil engineer, industrial civil engineering',
        startDurationEdu: 'September 1996',
        endDurationEdu: 'June 2002',
        country: 'Ukraine',
        city: 'Mariupol',
      },
      {
        id: 2,
        name: 'EDU.GENIUS.SPACE',
        profession: 'Profession Project manager 10.0',
        startDurationEdu: 'May 2022',
        endDurationEdu: 'June 2022',
        country: 'Ukraine',
        city: 'Lviv',
      },
      {
        id: 3,
        name: 'GoIT',
        profession: 'Full stack developer. HTML+CSS 1.0',
        startDurationEdu: 'June 2022',
        endDurationEdu: 'August 2022',
        country: 'Ukraine',
        city: 'Lviv',
      },
      {
        id: 4,
        name: 'GoIT',
        profession: 'Full stack developer. JavaScript 2.0',
        startDurationEdu: 'August 2022',
        endDurationEdu: 'November 2022',
        country: 'Ukraine',
        city: 'Lviv',
      },
    ],
    ua: [
      {
        id: 1,
        name: 'Приaзовський технічний державний універсітет (ПДТУ)',
        profession: 'Промислове та цивільне будівництво',
        startDurationEdu: 'Вересень 1996',
        endDurationEdu: 'Червень 2002',
        country: 'Україна',
        city: 'Маріуполь',
      },
      {
        id: 2,
        name: 'EDU.GENIUS.SPACE',
        profession: 'Profession Project manager 10.0',
        startDurationEdu: 'Травня 2022',
        endDurationEdu: 'Червень 2022',
        country: 'Україна',
        city: 'Львів',
      },
      {
        id: 3,
        name: 'GoIT',
        profession: 'Full stack developer. HTML+CSS 1.0',
        startDurationEdu: 'Червень 2022',
        endDurationEdu: 'Серпень 2022',
        country: 'Україна',
        city: 'Львів',
      },
      {
        id: 4,
        name: 'GoIT',
        profession: 'Full stack developer. JavaScript 2.0',
        startDurationEdu: 'Серпень 2022',
        endDurationEdu: 'Листопад 2022',
        country: 'Україна',
        city: 'Львів',
      },
    ],
  },
  skils: {
    tech: {
      en: [
        'HTML, CSS (SCSS)',
        'GIT',
        'WebPack, Parcel',
        'JavaScript',
        'React.js',
        'Node.js',
        'C++ (ArduinoIDE)',
        'Spring Layout',
        'Simplify3D, RepetierHost',
        'AutoCAD, Inventor',
      ],
      ua: [
        'HTML, CSS (SCSS)',
        'GIT',
        'WebPack, Parcel',
        'JavaScript',
        'React.js',
        'Node.js',
        'C++ (ArduinoIDE)',
        'Spring Layout',
        'Simplify3D, RepetierHost',
        'AutoCAD, Inventor',
      ],
    },
    soft: {
      en: ['Scrum', 'GTD', 'Teamwork'],
      ua: ['Scrum', 'GTD', 'Teamwork'],
    },
  },
};
export default dataResume;
