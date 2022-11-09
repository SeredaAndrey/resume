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

const insertName = new CreateMarkup(
  refs.name,
  '',
  dataResume.en.name
).insertOtherData();
const insertProfesion = new CreateMarkup(
  refs.profesion,
  '',
  dataResume.en.profesion
).insertOtherData();
const insertDescription = new CreateMarkup(
  refs.description,
  '',
  dataResume.en.description
).insertOtherData();
const createMarkupExperienceProject = new CreateMarkup(
  refs.experienceProjekt,
  experienceProject,
  dataResume.experienceProject
).insertMarkup();
const createMarkupExperienceWork = new CreateMarkup(
  refs.experienceWork,
  experienceWork,
  dataResume.en.experienceWork
).insertMarkup();
const createMarkupEducation = new CreateMarkup(
  refs.education,
  educations,
  dataResume.en.education
).insertMarkup();
const createMarkupContacts = new CreateMarkup(
  refs.contacts,
  contacts,
  dataResume.en.contacts
).insertMarkup();
const createMarkupSoftSkils = new CreateMarkup(
  refs.softSkils,
  softskils,
  dataResume.en.skils.soft
).insertMarkup();
const createMarkupTechSkils = new CreateMarkup(
  refs.techSkils,
  techskils,
  dataResume.en.skils.tech
).insertMarkup();

//
