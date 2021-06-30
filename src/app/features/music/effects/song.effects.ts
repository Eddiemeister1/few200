//loadSongs -> (api?) -> (loadSongSucceeded | loadSongFailed)

import { templateJitUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "rxjs/internal/scheduler/Action";
import { mergeMap, map } from "rxjs/operators";
import * as actions from '../actions/song.action';
import { SongEntity } from "../reducers/songs.reducers";
import { SongsDataService } from "../services/songs-data.service";

@Injectable()
export class SongEffects {

  //tempSongCreated => (api) => songAdded
  sendSongToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.tempSongCreated),
      mergeMap(originalAction => this.service.addSong(originalAction.payload)
        .pipe(
          map(payload => actions.songAdded({ temporaryId: originalAction.payload._id, payload }))
        )
      )
    )
  )
  private tempId = 1;
  //songCreated => tempSongCreated
  createTempSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songCreated),
      map(action => ({ _id: 'TEMP' + this.tempId++, ...action.payload } as SongEntity)),
      map(payload => actions.tempSongCreated({ payload }))
    )
  )
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongs),
      mergeMap(() => this.service.getSongs().pipe(
        map(payload => actions.loadSongSucceeded({ payload }))
      ))
    )
  )
  constructor(private actions$: Actions, private service: SongsDataService) {

  }
}
