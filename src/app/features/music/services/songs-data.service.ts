import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SongEntity } from "../reducers/songs.reducers";

@Injectable()
export class SongsDataService {

  getSongs(): Observable<SongEntity[]> {
    //todo: ask the api for this.
    return this.client.get<{ data: SongEntity[] }>('http://localhost:3000/songs').pipe(
      map(response => response.data)
    )
  }

  constructor(private client: HttpClient) {

  }
}
