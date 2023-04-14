import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "../Model/todo.interface";
import { FilterEnum } from "../Type/filter.enum";

@Injectable()
export class TodoService{
     todos$ = new BehaviorSubject<TodoInterface[]>([])
     filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)



     addTodo(text: string): void{
          const newTodo : TodoInterface = {
               text,
               isCompleted : false,
               id: Math.random().toString(16)
          }

          const updatedTodo = [...this.todos$.getValue(), newTodo]
          this.todos$.next(updatedTodo)
     }
}