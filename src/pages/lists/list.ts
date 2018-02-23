import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodesProvider } from '../../providers/codes';
import { Page } from './page';


@Component({templateUrl: 'list.html'})
export class ActivePage extends Page {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
    super(codesProv, "activos")
  }
}

@Component({templateUrl: 'list.html'})
export class NewPage extends Page {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
    super(codesProv, "nuevos")
  }
}

@Component({templateUrl: 'list.html'})
export class InstalationPage extends Page {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
    super(codesProv, "reinstalaciones")
  }
}

@Component({templateUrl: 'list.html'})
export class RemovePage extends Page {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
    super(codesProv, "retiros")
  }
}

@Component({templateUrl: 'list.html'})
export class DisablePage extends Page {
  constructor(public navCtrl: NavController, public codesProv: CodesProvider) {
    super(codesProv, "anuladas")
  }
}
