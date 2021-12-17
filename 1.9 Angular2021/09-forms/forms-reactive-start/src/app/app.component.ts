import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm: FormGroup;
    forbiddenUserNames = ['Chris', 'Anna'];

    ngOnInit() {
        this.signupForm = new FormGroup({
            userData: new FormGroup({
                username: new FormControl(null, [
                    Validators.required,
                    this.forbbidenNames.bind(this),
                ]),
                email: new FormControl(
                    null,
                    [Validators.required, Validators.email],
                    this.forbiddenEmails
                ),
            }),

            gender: new FormControl('male'),
            hobbies: new FormArray([]),
        });
        /*  this.signupForm.valueChanges.subscribe( (value) => { 
            console.log(value);
            
        }) */
        this.signupForm.statusChanges.subscribe((status) => {
            console.log(status);
        });
        this.signupForm.setValue({
            //patchValue
            userData: {
                username: 'John',
                email: 'john@test.com',
            },
            gender: 'male',
            hobbies: [],
        });
    }

    onSubmit() {
        console.log(this.signupForm);
        this.signupForm.reset(); // can pass an object to reset to specific values
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    forbbidenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        return null;
    }

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((res, rej) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    res({ emailIsForbidden: true });
                } else {
                    res(null);
                }
            }, 1500);
        });
        return promise;
    }
   
}
