import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundPlayerComponent {
  public URL_PATH = './../../../assets/data/audio';
  @Input() selectedSoundName!: string;
}
