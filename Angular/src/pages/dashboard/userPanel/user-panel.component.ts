import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    standalone: true,
    templateUrl: 'user-panel.component.html',
})
export class UserPanelComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        fetch('/api/user/' + this.route.snapshot.paramMap.get('id'))
        .then(response => response.json())
        .then(data => console.log(data))
    }
}
