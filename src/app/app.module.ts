import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component : HomeComponent},
    {path: 'home', component : HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'contact', component: ContactComponent},
    
  ])   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, LibraryComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
