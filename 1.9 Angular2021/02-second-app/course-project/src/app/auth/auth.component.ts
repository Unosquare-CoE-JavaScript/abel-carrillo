import {
    Component,
    ComponentFactoryResolver,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
    isLoginMode = true;
    authForm: FormGroup;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, { static: true })
    alertHost: PlaceholderDirective;
    private closeSub: Subscription;
    private storeSub: Subscription;

    constructor(
       /*  private authService: AuthService,
        private router: Router, */
        private cmpFactoryResolver: ComponentFactoryResolver,
        private store: Store<fromApp.AppState>
    ) {}

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.isLoading = authState.loading;
            this.error = authState.authError;

            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });

        this.authForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
        });
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit() {
        if (!this.authForm.valid) {
            return;
        }

        const { email, password } = this.authForm.value;
        // let authObs: Observable<AuthResponseData>;
        // this.isLoading = true;
        // console.log(this.authForm.value);
        if (this.isLoginMode) {
            //authObs = this.authService.login(email, password);
            this.store.dispatch(
                new AuthActions.LoginStart({ email: email, password: password })
            );
        } else {
            //authObs = this.authService.signup(email, password);
            this.store.dispatch(
                new AuthActions.SignupStart({
                    email: email,
                    password: password,
                })
            );
        }

        /*  authObs.subscribe(
            (resData) => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['./recipes']);
            },
            (errorMesagge) => {
                //console.log(error);
                this.error = errorMesagge;
                this.showErrorAlert(errorMesagge);
                this.isLoading = false;
            }
        ); */
        this.authForm.reset();
    }

    onHandleError() {
        //this.error = null;
        this.store.dispatch(new AuthActions.ClearError());
    }

    private showErrorAlert(message: string) {
        const alertCmpFactory =
            this.cmpFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const cmpRef = hostViewContainerRef.createComponent(alertCmpFactory);

        cmpRef.instance.message = message;
        this.closeSub = cmpRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
