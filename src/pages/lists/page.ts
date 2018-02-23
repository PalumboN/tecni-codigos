import * as _ from 'lodash';
import { CodesProvider } from '../../providers/codes';

export abstract class Page {
  public title : String
  public items = []

  constructor(protected codesProv: CodesProvider, public name: String) {
    this.title = _.capitalize(name)
    this.items = codesProv.search(this.name)
  }

  search({target}) {
    const search = target.value
    this.items = this.codesProv.search(this.name, search)
  }

  changeFav(code) {
    this.codesProv.changeFav(code)
  }
}
