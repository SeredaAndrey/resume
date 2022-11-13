import * as bootstrap from 'bootstrap';

import refs from './js/refs';
import CreateMarkup from './js/createmarkup';

import dataResume from './js/data-resume';

import experienceProject from './templates/experience-project.hbs';
import experienceWork from './templates/experience-work.hbs';
import educations from './templates/educations.hbs';
import contacts from './templates/contacts.hbs';
import softskils from './templates/softskils.hbs';
import techskils from './templates/techskils.hbs';

const createMarkup = new CreateMarkup();

refs.languageSwitcher.addEventListener('input', event => {
  if (!event.target.checked) {
    createMarkup.insertLanguage('en');
  } else {
    createMarkup.insertLanguage('ua');
  }
  clearMarkup();
  loadMarkup();
});
loadMarkup();

function loadMarkup() {
  createMarkup.insertOtherData(refs.name, dataResume.name);
  createMarkup.insertOtherData(refs.profesion, dataResume.profesion);
  createMarkup.insertOtherData(refs.description, dataResume.description);
  createMarkup.insertMarkup(
    refs.experienceProjekt,
    dataResume.experienceProject,
    experienceProject
  );
  createMarkup.insertMarkup(
    refs.experienceWork,
    dataResume.experienceWork,
    experienceWork
  );
  createMarkup.insertMarkup(refs.education, dataResume.education, educations);
  createMarkup.insertMarkup(refs.contacts, dataResume.contacts, contacts);
  createMarkup.insertMarkup(refs.softSkils, dataResume.skils.soft, softskils);
  createMarkup.insertMarkup(refs.techSkils, dataResume.skils.tech, techskils);
}
function clearMarkup() {
  createMarkup.clearMarkup(refs.experienceProjekt);
  createMarkup.clearMarkup(refs.experienceWork);
  createMarkup.clearMarkup(refs.education);
  createMarkup.clearMarkup(refs.contacts);
  createMarkup.clearMarkup(refs.softSkils);
  createMarkup.clearMarkup(refs.techSkils);
}
