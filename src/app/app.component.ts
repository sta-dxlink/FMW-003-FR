import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { first } from 'rxjs';
import { timer } from 'rxjs';
import { AuthGuard } from './services/auth.guard';
import { GuardsCheckEnd, GuardsCheckStart, NavigationCancel, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timer: any;
  token: any;
  userStatus: any;
  loggedIn = false;
  message!: string;
  loading=false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    protected authGuard: AuthGuard,
    protected router: Router,
  ) {}

  title = 'FMW-003';

  ngOnInit() {
    this.authService.currentLogInStatus.subscribe(
      (message) => (this.message = message)
    );
    // console.log(this.message);
    this.getToken();
    this.setLoginStatus();
    this.setProgramStat();
    this.timer = timer(0, 10000);
    this.timer.subscribe((t: any) => this.updateTimeSpent());


        this.router.events.subscribe((event) => {
          if (event instanceof GuardsCheckStart) {
            this.loading = true;
            console.log('GuardStart');
          }
          if (
            event instanceof GuardsCheckEnd ||
            event instanceof NavigationCancel
          ) {
            this.loading = false;
            console.log('GuardEnd');
          }
        });
  }

  ngOnchanges() {
    
  }
  
  setProgramStat() {
    this.authService
      .updateStat()
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          // console.log(error);
        }
      );
  }

  setLoginStatus() {
    if (this.token == 'OpIzFQtb3qc2TkEGPk9X55uihzZ38kqt') {
      this.storageService.clearCookie();
    }
    if (this.token) {
      //check if token is valid
      //check if token is valid then set Login status appopriately
      this.authService
        .validateToken()
        .pipe(first())
        .subscribe((data) => {
          this.userStatus = data;
          if (this.userStatus.status) {
            this.loggedIn = true;
            this.authService.changeStatus('true');
            this.authService
              .getUserDetails()
              .pipe(first())
              .subscribe((data) => {
                //console.log(data);
                this.storageService.setEmailCookie(data.email);
              });
            // console.log(this.message);
          } else {
            this.loggedIn = false;
          }
        });
    }
  }
  updateTimeSpent() {
    this.authService
      .updatedTimeSpent()
      .pipe(first())
      .subscribe({
        next: (data) => {
          // console.log(data);
        },
        error: (error) => {
          // console.log(error);
        },
      });
    return 'updating';
  }

  async getToken() {
    this.token = this.storageService.getToken();
  }
}
