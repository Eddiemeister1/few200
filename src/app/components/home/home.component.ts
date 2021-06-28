import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosDataService } from 'src/app/services/todos-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfTodoItems$!: Observable<number>;
  constructor(private service: TodosDataService) { }

  ngOnInit(): void {
    this.numberOfTodoItems$ = this.service.getUnumberOfTodoItems();
  }

}
