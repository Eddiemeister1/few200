import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}

//1. If you are in a feature, create a feature selector.

//2. Create a selector for each main branch of the store
const selectCounterBranch = (state: AppState) => state.counter;

//3. Helpers

//4. What does your components need?

export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  (c) => c.current
)

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
)

export const selectCounterResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)

export const selectDecrementShouldBeDisabled = createSelector(
  selectCounterCurrent,
  selectCountingBy,
  (current, by) => current - by < 0
)
