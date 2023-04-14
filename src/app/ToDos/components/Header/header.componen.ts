import { Component,OnInit } from "@angular/core";
import { TodoService } from "../../Services/todo.service";


@Component({
    selector : 'app-todo-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent {

    constructor(private todoService : TodoService){
        this.todoService.todos$.subscribe(data => {
            console.log(data)
        })
    }

    text: string = ''
    changeText(event : Event): void{
        const target = event.target as HTMLInputElement
        this.text = target.value
    }

    addTodo(): void{
        console.log(this.text);
        this.todoService.addTodo(this.text)
        this.text = ''      
    }
}