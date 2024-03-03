import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
import { ActionCardComponent, IAction } from '../action-card/action-card.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-kanban-board',
    standalone: true,
    imports: [CommonModule, ActionCardComponent],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent implements OnInit, OnDestroy {
    actions: IAction[] = [];
    private actionSubscriber: Subscription = new Subscription();

    constructor(private actionService: ActionService) {}

    ngOnInit() {
        this.actions = this.actionService.getActions();
        this.actionService.getActionsUpdateListener().subscribe((actions: IAction[]) => {
            this.actions = actions;
        })
    }

    ngOnDestroy() {
        this.actionSubscriber.unsubscribe();
    }

    trackAction(index: number, action: any): number {
        return action.id;
    }

}
