import { Component, OnInit, AfterViewInit } from "@angular/core";
import {Chart} from 'chart.js/auto'


@Component({
    standalone: true,
    selector: 'modes-stats',
    templateUrl: './modes-stats.component.html',
})
export class ModesStatsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        fetch('/api/modes/stats')
        .then(response => response.json())
        .then(data => {
            this.ShowChart(data)

            console.log('data', data)

            console.log("Ascension", Object.values(data['Ascension']).map(row => row))
            console.log("Impact", Object.values(data['Impact']).map(row => row))
            console.log("Introspection", Object.values(data['Introspection']).map(row => row))
        });
    }


    // TODO: put this function in a service
    ShowChart(data: any) {
        new Chart(
            //@ts-ignore
            document.getElementById('modes-chart'),
            {
                type: 'line',
                data: {
                    labels: Array.from({length:50}, (_,i) => i),
                    datasets: [
                        {
                            label: 'Ascension',
                            data: Object.values(data['Ascension']).map(row => row)
                        },
                        {
                            label: 'Impact',
                            data: Object.values(data['Impact']).map(row => row)
                        },
                        {
                            label: 'Introspection',
                            data: Object.values(data['Introspection']).map(row => row)
                        },
                        {
                            label: 'Transformation',
                            data: Object.values(data['Transformation']).map(row => row)
                        },
                        {
                            label: 'Équilibre',
                            data: Object.values(data['Équilibre']).map(row => row)
                        },
                    ]
                }
            }
        )
    }
}