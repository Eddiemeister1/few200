import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCurrent, selectCounterResetDisabled, selectDecrementShouldBeDisabled } from 'src/app/reducers';
import * as actions from '../../actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$!: Observable<number>;
  counterResetDisabled$!: Observable<boolean>;
  decrementDisabled$!: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrent); //"Inappropriate Intimacy"
    this.counterResetDisabled$ = this.store.select(selectCounterResetDisabled);
    this.decrementDisabled$ = this.store.select(selectDecrementShouldBeDisabled);
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }
  reset() {
    this.store.dispatch(actions.countReset());
  }
}
