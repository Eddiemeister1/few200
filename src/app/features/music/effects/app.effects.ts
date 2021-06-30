//applicationStarted -> loadSongs

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/song.action';
import { map } from 'rxjs/operators';
@Injectable()
export class AppEffects {

  loadTheSongOnApplicationStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songActions.loadSongs())
    )
  )
  constructor(private actions$: Actions) {

  }
}
