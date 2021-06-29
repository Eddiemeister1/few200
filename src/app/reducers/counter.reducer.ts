import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, increment),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - 1 }))
)
//must be "pure" functions
//cannot modify any arguments (state, or the action)
export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  return myReducer(currentState, action);
}

function increment(state: CounterState): CounterState {
  return {
    current: state.current + 1
  }
}
