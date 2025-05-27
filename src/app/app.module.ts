import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HangmanComponent } from './games/hangman/hangman.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoastComponent } from './roast/roast.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    LeftComponentComponent,
    FooterComponent,
    HangmanComponent,
    NotfoundComponent,
    RoastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
