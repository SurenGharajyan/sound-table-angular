import {Subject, takeUntil} from 'rxjs';
import {SoundTable} from '../../../types/@interfaces/sound-table';
import {SoundContentService} from '../../services/sound-content.service';
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sound-table',
  templateUrl: './sound-table.component.html',
  styleUrls: ['./sound-table.component.scss']
})
export class SoundTableComponent implements OnInit, OnDestroy {
  @Output() public soundSelectedEmit = new EventEmitter<string>();

  public sounds!: SoundTable[];
  public displayedColumns: string[] = ['Id', 'Denomination', 'File Name']

  private destroy$ = new Subject();

  constructor(
    private soundService: SoundContentService
  ) {}

  ngOnInit(): void {
    this.getSoundListForTable();
  }

  private getSoundListForTable(): void {
    this.soundService
      .getAllSoundList()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(data => this.sounds = data);
  }
  handleRowClick(row: SoundTable): void {
    this.soundSelectedEmit.emit(row.fileName);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
