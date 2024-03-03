import { Component, OnInit } from "@angular/core";

@Component({
    standalone: true,
    selector: 'user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
    userList: User[] = []

    ngOnInit() {
        fetch('/api/users/list')
        .then(response => response.json())
        .then(data => {
            this.userList = data
        })
    }
}

interface User {
    id:string,
    createdAt: Date,
    degree: string,
    gender: string,
    birthYear: string,
    workSituation: string,
}