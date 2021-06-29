import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCurrent, selectCountingBy, selectDecrementShouldBeDisabled } from 'src/app/reducers';
import { countBySet } from 'src/app/actions/counter.actions';
@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent implements OnInit {

  countingBy$!: Observable<number>;
  decrementDisabled$!: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countingBy$ = this.store.select(selectCounterCurrent);
    this.decrementDisabled$ = this.store.select(selectDecrementShouldBeDisabled);
  }

  setCountBy(by: number) {

    this.store.dispatch(countBySet({ by }));
  }

}
