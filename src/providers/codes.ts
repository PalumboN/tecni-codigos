import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

class Item {
  fav = false

  constructor(json) {
    _.assign(this, json)
  }

  changeFav() {
    this.fav = !this.fav
  }

  icon() {
    return this.fav ? "heart" : "heart-outline"
  }
}

@Injectable()
export class CodesProvider {

  // Activos, Nuevos, Reinstalaciones, Retiros, Anulaciones
  public codes = {
    activos: [
      {
        id: 1,
        name: "Módem"
      },
      {
        id: 2,
        name: "Cable"
      },
    ],
    nuevos: [
      {
        id: 3,
        name: "Internet"
      },
      {
        id: 4,
        name: "Cable"
      },
    ]
  }

  constructor(private storage: Storage) {
    this.
    _sections()
    .forEach((section) => this._init(section))
    this._loadFavs()
  }

  _init(section) {
    this.codes[section] = this._codesFrom(section).map((it) => new Item(it))
  }

  changeFav(code) {
    code.changeFav()
    this._saveFavs()
  }

  _saveFavs() {
    const data = this.favs().map((it) => it.id).join(',')
    this.storage.set("favs", data)
  }

  _loadFavs() {
    this.storage.get("favs").then((favs) => {
      const favIds = favs.split(',')
      this._allCodes().forEach((it) => {
        if (favIds.includes(it.id.toString())) it.fav = true
      })
    })
  }

  favs() {
    return this._allCodes().filter((it) => it.fav)
  }

  search(section, search = null) {
    const current = this._codesFrom(section)
    return (!search)
      ? current
      : current.filter((it) => this._eq(it.name, search) || this._eq(it.id, search))
  }

  _allCodes() {
    return _.flatten(
      this.
      _sections()
      .map((section) => this._codesFrom(section))
    )
  }

  _sections() {
    return _.keys(this.codes)
  }

  _codesFrom(section) {
    return this.codes[section]
  }

  _eq(one, other) {
    return one.toString().toLowerCase().includes(other.toString().toLowerCase())
  }
}
