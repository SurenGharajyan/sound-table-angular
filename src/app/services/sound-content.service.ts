import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SoundTable} from '../../types/@interfaces/sound-table';

@Injectable({
  providedIn: 'root'
})
export class SoundContentService {
  private readonly BASE_PATH = './../../assets/data/json'
  constructor( private http: HttpClient ) {}

  public getAllSoundList(): Observable<SoundTable[]> {
    return this.http.get<SoundTable[]>(`${this.BASE_PATH}/sounds.json`);
  }

}
