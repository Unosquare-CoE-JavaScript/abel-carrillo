export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(this.loggedIn);
            }, 600);
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
