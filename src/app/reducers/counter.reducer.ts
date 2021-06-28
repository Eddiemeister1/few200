import { Action } from "@ngrx/store";

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}
//must be "pure" functions
//cannot modify any arguments (state, or the action)
export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: currentState.current + 1
      }
    }

    case 'decrement': {
      return {
        current: currentState.current - 1
      }
    }

    default: {
      return currentState
    }
  }
}
