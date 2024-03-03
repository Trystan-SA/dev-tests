import { Component } from "@angular/core";
import { KanbanBoardComponent } from "./kanban-board/kanban-board.component";
import { ActionService } from "./action.service";
import { randomUUID } from "crypto";

@Component({
    standalone: true,
    templateUrl: './kanban.component.html',
    styleUrl: 'kanban.component.scss',
    imports: [KanbanBoardComponent],
    providers: [ActionService]
})
export class KanbanComponent {

    constructor(private actionService: ActionService) {}

    newAction(){
        this.actionService.addAction()
    }
}