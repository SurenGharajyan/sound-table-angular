import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {SoundListComponent} from './sound-list.component';
import {SoundListRoutingModule} from './sound-list-routing.module';
import {SoundTableComponent} from './sound-table/sound-table.component';
import {SoundPlayerComponent} from './sound-player/sound-player.component';


@NgModule({
  declarations: [
    SoundListComponent,
    SoundTableComponent,
    SoundPlayerComponent
  ],
  exports: [
    SoundListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SoundListRoutingModule,
  ]
})
export class SoundListModule {
}
