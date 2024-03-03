import { Component, Input } from '@angular/core';

export type ActionStatusType = 'Pending' | 'Done' | 'InProgress'

export interface IAction {
    id: string
    title: string
    status: ActionStatusType
    Owner_userId: string,
} 

@Component({
    selector: 'app-action-card',
    standalone: true,
    imports: [],
    templateUrl: './action-card.component.html',
    styleUrl: './action-card.component.scss'
})
export class ActionCardComponent {
    @Input() action: IAction = {id: '0', title: 'Undefined', status: 'Pending', Owner_userId: '0'}

    constructor(){}

    public updateStatus(status: ActionStatusType){
        this.action.status = status;
    }

}
