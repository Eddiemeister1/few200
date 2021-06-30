import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SongEntity } from "../reducers/songs.reducers";

@Injectable()
export class SongsDataService {

  getSongs(): Observable<SongEntity[]> {
    //todo: ask the api for this.
    return of([
      { id: '1', title: 'Happy Birthday', artist: 'Unknown', album: 'Kids Annoying Songs' },
      { id: '2', title: 'Carnage', artist: 'Nick Cave and Warren', album: 'Carnage' }
    ])
  }
}
