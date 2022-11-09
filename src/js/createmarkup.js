export default class CreateMarkup {
  constructor(refs, templates, datas) {
    this.refs = refs;
    this.templates = templates;
    this.datas = datas;
  }

  insertMarkup() {
    this.refs.insertAdjacentHTML(
      'beforeend',
      this.createMarkup(this.templates, this.data)
    );
  }
  createMarkup() {
    const markup = [];
    console.log(this.datas);
    for (const data of this.datas) {
      markup.push(this.templates(data));
    }
    return markup.join('');
  }
  insertOtherData() {
    this.refs.textContent = this.datas;
  }
}
