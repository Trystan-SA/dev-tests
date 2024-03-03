import { Injectable } from '@angular/core';
import { ActionStatusType, IAction } from './action-card/action-card.component';
import {Subject} from 'rxjs'


// Service managing kanban actions events

@Injectable({
    providedIn: 'root'
})
export class ActionService {
    private actions: IAction[] = [];
    private actionsUpdated: Subject<IAction[]> = new Subject<IAction[]>();

    constructor() { }

    public addAction(){
        const action: IAction = {
            id: this.makeid(),
            title: 'New Action',
            status: 'Pending',
            Owner_userId: '123'
        }
        this.actions.push(action)
        this.actionsUpdated.next([...this.actions])

        console.log(this.actions)
    }

    public updateStatus(id: string, status: ActionStatusType){
        const action = this.actions.find(action => action.id == id);
        if (action){
            action.status = status;
        }
    }

    public getActions(){
        return this.actions;
    }

    public getActionsUpdateListener(){
        return this.actionsUpdated.asObservable();
    }


    private makeid() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 16) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
