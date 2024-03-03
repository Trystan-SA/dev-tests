import { Component } from "@angular/core";
import { ModesStatsComponent } from "./card/modes-stats.component";
import { SurveyCountComponent } from "./card/survey-count.component";
import { UserListComponent } from "./card/user-list/user-list.component";

@Component({
    standalone: true,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    imports: [ModesStatsComponent, SurveyCountComponent, UserListComponent]
})
export class DashboardComponent {}