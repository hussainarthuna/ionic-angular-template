import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(
        private nav: NavController,
        private router: Router
    ) {
    }

    goBack() {
        this.nav.back();
    }

    go(path: string): void {
        this.nav.navigateForward(path);
    }

    // Navigation tree will reset here.
    goAndSetRoot(path: string): void {
        this.nav.navigateRoot(path);
    }

}
