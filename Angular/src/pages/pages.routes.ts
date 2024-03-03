import { Route } from "@angular/router";

import { Index } from './index/index.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserPanelComponent } from "./dashboard/userPanel/user-panel.component";
import { KanbanComponent } from "./kanban/kanban.component";

export const PAGES_ROUTES: Route[] = [
    { path: '', component: Index },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'dashboard/user/:id', component: UserPanelComponent},
    { path: 'kanban', component: KanbanComponent}
]