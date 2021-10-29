import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second-exercise',
    templateUrl: './second-exercise.component.html',
    styles: [
        `
            h3 {
                color: dodgerblue;
            }

            .white-text {
                color: white;
            }
        `,
    ],
})
export class SecondExerciseComponent implements OnInit {
    // exercise 2
    showSecret = false;
    log = [];
    constructor() {}

    ngOnInit(): void {}

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }
}
