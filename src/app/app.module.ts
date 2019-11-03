import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraService } from './services/camera/camera.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ApplicationListPage } from './application-list/applicationList.page';
import { HomePage } from './home/home.page';
import { ValidatorService } from './services/validator/validator.service';
import { HTTP } from '@ionic-native/http/ngx';
import { SettingsPage } from './settings/settings.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      ApplicationListPage,
      SettingsPage,
      HomePage
    ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    Camera,
    CameraService,
    StatusBar,
    SplashScreen,
    ValidatorService,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
