export default class CreateMarkup {
  constructor() {
    this.language = 'en';
    this.refs = null;
    this.templates = null;
    this.datas = null;
  }

  insertLanguage(language) {
    this.language = language;
  }

  insertMarkup(refs, datas, templates) {
    this.refs = refs;
    this.templates = templates;
    this.datas = datas;
    if (this.language === 'en') {
      this.refs.insertAdjacentHTML(
        'beforeend',
        this.createMarkup(this.templates, this.datas.en)
      );
    } else if (this.language === 'ua') {
      this.refs.insertAdjacentHTML(
        'beforeend',
        this.createMarkup(this.templates, this.datas.ua)
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
    this.refs = refs;
    this.datas = datas;
    if (this.language === 'en') {
      this.refs.textContent = this.datas.en;
    } else if (this.language === 'ua') {
      this.refs.textContent = this.datas.ua;
    }
  }
  clearMarkup(refs) {
    this.refs = refs;
    this.refs.innerHTML = '';
  }
}
