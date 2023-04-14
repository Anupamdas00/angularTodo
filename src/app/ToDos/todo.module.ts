import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodosComponent } from "./components/todo.component";
import { HeaderComponent } from "./components/Header/header.componen";
import { TodoService } from "./Services/todo.service";
import { MainComponent } from "./components/Main/main.component";

import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./components/ToDo-Item/todo-item.component";

const routes : Routes = [
    { path : '', component : TodosComponent  }
]


@NgModule({
    declarations : [
        TodosComponent,
        HeaderComponent,
        MainComponent,
        TodoItemComponent
    ],
    imports : [CommonModule, RouterModule.forChild(routes)],
    providers : [TodoService]
})



export class TodosModule{};