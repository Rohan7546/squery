import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from './games/hangman/hangman.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoastComponent } from './roast/roast.component';


const routes: Routes = [
  {path: '', component: MainComponentComponent},
  {path: 'hangman', component: HangmanComponent},
  {path: 'roast', component: RoastComponent},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
