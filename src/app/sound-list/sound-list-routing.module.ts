import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SoundListComponent} from "./sound-list.component";

const soundRoute: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: SoundListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(soundRoute)],
  exports: [RouterModule]
})
export class SoundListRoutingModule { }
