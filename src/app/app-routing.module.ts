import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TtsComponent } from './tts/tts.component';

const routes: Routes = [
  {path:'tts', component:TtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
