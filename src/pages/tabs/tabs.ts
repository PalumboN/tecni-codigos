import { Component } from '@angular/core';

import { ActivePage, NewPage, InstalationPage, RemovePage, DisablePage } from '../lists/list';
import { FavPage } from '../favs/fav';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  pages = {FavPage, ActivePage, NewPage, InstalationPage, RemovePage, DisablePage}
}
