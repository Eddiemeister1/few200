import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
}

const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (currentState, a) => ({ ...currentState, current: currentState.current + currentState.by })),
  on(actions.countDecremented, (currentState, a) => ({ ...currentState, current: currentState.current - currentState.by })),
  on(actions.countBySet, (currentState, a) => ({ ...currentState, by: a.by }))
)
//must be "pure" functions
//cannot modify any arguments (state, or the action)
export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  return myReducer(currentState, action);
}
