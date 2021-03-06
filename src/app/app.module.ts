import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
// import { Storage } from '@ionic/storage';

// Pages
import { HomePage }        from '../pages/home/home';
import { LocationPage }    from '../pages/location/location';
import { MyDetailsPage }   from '../pages/my-details/my-details';
import { CampDetailsPage } from '../pages/camp-details/camp-details';

// Providers
import { GoogleMaps }   from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { Data }         from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data, GoogleMaps, Connectivity]
})

export class AppModule {}
