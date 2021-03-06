import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContributeToComponent } from './contribute-to/contribute-to.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { GPhotosComponent } from './gphotos/gphotos.component';
import { GVideosComponent } from './gvideos/gvideos.component';
import { CDonationComponent } from './cdonation/cdonation.component';
import { CertificateComponent } from './certificate/certificate.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContributeToComponent,
    ContributionsComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    SliderComponent,
    GPhotosComponent,
    GVideosComponent,
    CDonationComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
