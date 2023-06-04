import { transition, trigger, useAnimation } from '@angular/animations';
import {
  AfterViewChecked,
  Component,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs';
import { scaleIn, scaleOut } from '../animation';
import { cases } from '../people';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { User } from '../models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '1000ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '1000ms' } }),
      ]),
    ]),
  ],
})
export class NavComponent implements OnInit, AfterViewChecked {
  loginDialogRef: any;
  dialogRef: any;
  registerForm!: FormGroup;
  token!: any;
  isLoggedIn!: string;
  submitted = false;
  hide = true;
  user = {} as User;
  url = '';
  menu = true;
  patient = false;
  smallbar = false;
  bigbar = false;
  cases = cases;

  Percentage: number[] = new Array(4);

  @ViewChild('loginTemplate') dialogLoginTemplate!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public zone: NgZone,
    private route: Router,
    public authService: AuthService,
    public storageService: StorageService
  ) {}

  ngAfterViewChecked(): void {
    if (this.url == '/Home') {
      var Pcase = document.getElementById('HOME');
      Pcase!.style.backgroundColor = '#B48595';
    } else if (this.url.includes('PatientCases')) {
      var Pcase = document.getElementById('PATIENT_CASES');
      Pcase!.style.backgroundColor = '#B48595';

      if (this.url == '/PatientCases/case1') {
        var under = document.getElementById('case1');
        if (under != null) {
          under.style.textDecoration = 'underline';
        }
      } else if (this.url == '/PatientCases/case2') {
        var under = document.getElementById('case2');
        if (under != null) {
          under.style.textDecoration = 'underline';
        }
      } else if (this.url == '/PatientCases/case3') {
        var under = document.getElementById('case3');
        if (under != null) {
          under.style.textDecoration = 'underline';
        }
      } else if (this.url == '/PatientCases/case4') {
        var under = document.getElementById('case4');
        if (under != null) {
          under.style.textDecoration = 'underline';
        }
      }
    } else if (this.url == '/Evaluation') {
      var Pcase = document.getElementById('EVALUATION');
      Pcase!.style.backgroundColor = '#B48595';
    } else if (this.url == '/Certificate') {
      var Pcase = document.getElementById('CERTIFICATE');
      Pcase!.style.backgroundColor = '#B48595';
    }

 
  }
  ngOnInit(): void {
    this.authService.currentLogInStatus.subscribe((message) => {
      this.isLoggedIn = message;
      console.log(this.isLoggedIn);
    });
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
        if (this.url == '/') {
          this.bigbar = true;
          this.smallbar = false;
        } else {
          this.bigbar = false;
          this.smallbar = true;
        }
      });

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    for (let i = 0; i < this.Percentage.length; i++) {
      this.Percentage[i] = 0;
    }

    //q1
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_01',
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_02',
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_03',
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_04',
      0
    );
    //q2
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_01',
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_02',
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_03',
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_04',
      1
    );
    //q3
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_01',
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_02',
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_03',
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_04',
      2
    );
    //q4
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_01',
      3
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_02',
      3
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_03',
      3
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_04',
      3
    );
  }

  ngDoCheck(){
    
  }
  toggleMenu() {
    this.menu = !this.menu;
  }

  togglePatientMenu() {
    this.patient = !this.patient;
  }

  checkLogin() {
    if (this.isLoggedIn === 'false') {
      this.loginDialogRef = this.dialog.open(this.dialogLoginTemplate, {
        restoreFocus: false,
      });
    } else {
      this.zone.run(() => {
        this.route.navigate(['/Home']);
      });
    }
  }

  Register() {
    window.open('https://dxlink.ca/register', '_blank');
  }

  onSubmit() {
    this.submitted = true;

    console.log('form data is ', this.registerForm.value);

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      this.storageService.sendNotification(
        'Be sure to correctly enter your credentials'
      );
      return;
    } else {
      if (this.registerForm.valid) {
        this.authService
          .login(this.registerForm.value)
          .pipe(first())
          .subscribe((data) => {
            this.token = data;
            if (this.token.status == 'correct credentials') {
              this.authService.changeStatus('true');
              this.isLoggedIn = 'true';
              this.loginDialogRef = this.dialog.closeAll();
              this.saveToken(this.token.token);
              this.zone.run(() => {
                this.route.navigate(['/Home']);
              });
            } else {
              this.storageService.sendNotification('Invalid credentials');
              this.registerForm.setErrors({ invalid: true });
            }
          });
      }
    }
  }

  forgotPass() {
    window.open('https://dxlink.ca/forgot_password', '_blank');
  }
  saveToken(token: any) {
    this.storageService.setCookie(token);
  }

  checkCase_Question1Completion(pid: string, qid: string, where: number) {
    this.authService
      .checkQuestionCompletion(pid, qid)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.doctor_answer) {
            this.Percentage[where] += 25;
          }
        },
        error: (e) => console.log(e),
      });
  }
}
