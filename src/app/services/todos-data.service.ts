import { TodoListItemViewModel } from "../models/todos.models";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
export class TodosDataService {

  private data: TodoListItemViewModel[];
  private subject: BehaviorSubject<TodoListItemViewModel[]>;
  private id = 3;
  constructor() {
    this.data = [{
      id: '1', description: 'Wash Cars'
    }, {
      id: '2', description: 'Edge Drive'
    }];

    this.subject = new BehaviorSubject<TodoListItemViewModel[]>(this.data);
  }
  getData(): Observable<TodoListItemViewModel[]> {
    return this.subject.asObservable();
  }

  addTodoItem(item: { description: string }) {
    const newItem: TodoListItemViewModel = {
      description: item.description,
      id: (this.id++).toString()
    };

    //send it to the API
    this.data = [newItem, ...this.data];
    this.subject.next(this.data);
  }

  getUnumberOfTodoItems(): Observable<number> {
    return this.subject.asObservable().pipe(
      map(items => items.length)
    );
  }
}
