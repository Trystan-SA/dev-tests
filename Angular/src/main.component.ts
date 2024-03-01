import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {}