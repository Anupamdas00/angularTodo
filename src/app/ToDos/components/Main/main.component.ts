import { Component, OnInit } from '@angular/core'
import { Observable, combineLatest, combineLatestAll, map } from 'rxjs'
import { TodoInterface } from '../../Model/todo.interface';
import { TodoService } from '../../Services/todo.service';
import { FilterEnum } from '../../Type/filter.enum';

@Component({
    selector : 'app-main-todo',
    templateUrl : './main.component.html'
})


export class MainComponent implements OnInit{
    visibleTodos$!: Observable<TodoInterface[]>;

    constructor(private todoService: TodoService){}

    ngOnInit(): void {
        this.visibleTodos$ = combineLatest(
           [this.todoService.todos$,
            this.todoService.filter$]
        ).pipe(map(([todo,filter] : [ TodoInterface[], FilterEnum ])  => {
            if(filter === FilterEnum.active){
                return todo.filter((item) => !item.isCompleted)
            } else if (filter === FilterEnum.completed){
                return todo.filter((item) => item.isCompleted)
            }
            return todo;
        }))
    }
}