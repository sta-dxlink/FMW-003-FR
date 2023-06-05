import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  status!: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  setCookie(data: any) {
    // this.cookieService.set('token', data, 7, '/')
    this.cookieService.set('ccs_token', data, 365, '/', 'dxlink.ca');
    this.cookieService.set('cert_token', data, 365, '/', 'dxlink.ca');
    window.localStorage.setItem('ccs_token', data);
    window.localStorage.setItem('cert_token', data);
  }
  setEmailCookie(email: any) {
    // this.cookieService.set('cert_email', email, 7, '/')
    this.cookieService.set('cert_email', email, 365, '/', 'dxlink.ca');
    window.localStorage.setItem('email', email);
  }

  /**
   * Clear cookie if cookie
   */
  clearCookie() {
    // this.cookieService.deleteAll('/');

    this.cookieService.delete('token', '/', 'dxlink.ca');
    this.cookieService.delete('PHPSESSID', '/', 'www.dxlink.ca');
    window.localStorage.clear();
  }

  getToken() {
    if (window.localStorage.getItem('token')) {
      this.setCookie(window.localStorage.getItem('token'));
      return window.localStorage.getItem('token');
    }
    if (window.localStorage.getItem('ccs_token')) {
      this.setCookie(window.localStorage.getItem('ccs_token'));
      return window.localStorage.getItem('ccs_token');
    }

    return this.cookieService.get('ccs_token');
  }

  sendNotification(text: string) {
    this.snackBar.open(text, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  sendQuestion(pid: string, qid: string, value: any, auth: AuthService) {
    auth
      .submitQuestion(pid, qid, value)
      .pipe(first())
      .subscribe({
        next: (data) => {
          auth.updateCase1status(true);
        },
        error: (e) => {
          this.sendNotification(
            'Erreur dans l\'envoi de votre réponse, veuillez réessayer'
          );
          console.log(e);
        },
      });

              this.sendNotification(
                'Cliquez sur le bouton "SUIVANT" pour passer à la vidéo suivante.'
              );
  }

  addSpaceAfterComma(str: string | String): string | String {
    if (typeof str === 'string') {
      return str.replace(/,/g, ', ');
    } else if (typeof str === 'object' && str instanceof String) {
      return new String(str.replace(/,/g, ', '));
    } else {
      throw new Error('Invalid input type');
    }
  }
}
