import { Component } from '@angular/core';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent {
  public selectedSound!: string;

  public handleSelectSound(value: string): void {
    this.selectedSound = value;
  }

}
