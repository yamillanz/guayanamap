import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainMapComponent } from './components/main-map/main-map.component';
import { PlacesSelectComponent } from './components/places-select/places-select.component';
import { PlacesDetailsComponent } from './components/places-details/places-details.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainMapComponent,
    PlacesSelectComponent,
    PlacesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
