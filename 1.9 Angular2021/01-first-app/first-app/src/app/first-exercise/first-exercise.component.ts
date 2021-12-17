import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-first-exercise',
    templateUrl: './first-exercise.component.html',
    styles: [
        `
            h3 {
                color: dodgerblue;
            }
        `,
    ],
})
export class FirstExerciseComponent implements OnInit {
    username = '';

    constructor() {}

    ngOnInit(): void {}
}
