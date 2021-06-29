import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, map, filter } from "rxjs/operators";

import * as actions from '../actions/counter.actions';
import { applicationStarted } from "../actions/app.actions";
@Injectable()
export class CounterEffects {

  // applicationStarted => read localStorage => countBySet | null
  getCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), //("1" | "3" | "5") | null
      filter(savedValue => savedValue !== null), // Stop. | "1", "3", "5"
      filter((val: any) => typeof (val) === 'string'), //only string, not string | null
      map(a => parseInt(a, 10)), //1 | 3 | 5
      map(by => actions.countBySet({ by }))
    ), { dispatch: false }
  )
  //countBySet => (write it to localstorage) => null, nothing.
  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    )
    , { dispatch: false })
  constructor(private actions$: Actions) {

  }
}
