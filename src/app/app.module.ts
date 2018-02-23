import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { CodesProvider } from '../providers/codes';

import { ActivePage, NewPage, InstalationPage, RemovePage, DisablePage }  from '../pages/lists/list';
import { FavPage } from '../pages/favs/fav';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavPage,
    ActivePage,
    NewPage,
    InstalationPage,
    RemovePage,
    DisablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavPage,
    ActivePage,
    NewPage,
    InstalationPage,
    RemovePage,
    DisablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CodesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
