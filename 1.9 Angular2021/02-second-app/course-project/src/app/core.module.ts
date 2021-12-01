import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/services/auth-interceptor.service';
import { RecipeService } from './recipes/services/recipe.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },],
})
export class CoreModule { }
