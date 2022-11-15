export default class CreateMarkup {
  constructor() {
    this.language = 'en';
    this.templates = null;
  }

  insertLanguage(language) {
    this.language = language;
  }

  insertMarkup(refs, datas, templates) {
    this.templates = templates;
    if (this.language === 'en') {
      refs.insertAdjacentHTML(
        'beforeend',
        this.createMarkup(this.templates, datas.en)
      );
    } else if (this.language === 'ua') {
      refs.insertAdjacentHTML(
        'beforeend',
        this.createMarkup(this.templates, datas.ua)
      );
    }
  }
  createMarkup(templates, datas) {
    const markup = [];
    for (const data of datas) {
      markup.push(this.templates(data));
    }
    return markup.join('');
  }
  insertOtherData(refs, datas) {
    if (this.language === 'en') {
      refs.textContent = datas.en;
    } else if (this.language === 'ua') {
      refs.textContent = datas.ua;
    }
  }
  insertPhoto(refs, src) {
    refs.src = src;
  }
  clearMarkup(refs) {
    refs.innerHTML = '';
  }
}
