import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodesProvider } from '../../providers/codes';

@Component({
  templateUrl: 'fav.html'
})
export class FavPage {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
  }
}
