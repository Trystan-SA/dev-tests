import { Component, OnInit } from "@angular/core";

@Component({
    standalone: true,
    selector: 'survey-count',
    templateUrl: './survey-count.component.html'
})
export class SurveyCountComponent implements OnInit {
    // TODO : Show skeleton loader while fetching data
    surveyCount: number | string = 0;

    constructor() {}

    ngOnInit(): void {
        fetch('/api/survey-results/count')
        .then(response => response.json())
        .then(data => {
            if(data.count){
                this.surveyCount = data.count;
            }
            else {
                this.surveyCount = "NaN";
            }
        })
        .catch(error => {
            this.surveyCount = "NaN"
            //TODO Show error message
        })
    }
}