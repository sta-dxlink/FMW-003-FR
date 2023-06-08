import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { mEvalo } from 'src/app/components/things';
import AOS from 'aos';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { first } from 'rxjs';

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
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent {
  multiple_choices = mEvalo;
  registerForm!: FormGroup;
  submitted = false;
  onSubmitpressed = false;
  option1: boolean | undefined;
  option2: boolean | undefined;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    public storageService: StorageService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.registerForm = this.formBuilder.group({
      q1: ['', [Validators.required]],
      q2: ['', [Validators.required]],
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]],
      q5: ['', [Validators.required]],
      q6: ['', [Validators.required]],
      q7: ['', [Validators.required]],
      q8: ['', [Validators.required]],
      q9: ['', [Validators.required]],
      q10: ['', [Validators.required]],
      q11: ['', [Validators.required]],
      q12: ['', [Validators.required]],
      q13: ['', [Validators.required]],
      q14: ['', [Validators.required]],
      q15: ['', [Validators.required]],
      q16: ['', [Validators.required]],
      q17: ['', [Validators.required]],
      q18: ['', [Validators.required]],
      q19: ['', [this.requiredIfOption1True()]],
      q20: ['', [Validators.required]],
      q21: ['', ],
      q22: ['', ],
      q23: ['', [this.requiredIfOption2True()]],
      q24: ['', [Validators.required]],
      q25: [''],
    });
    this.checkEvaluationCompletion();
  }
  requiredIfOption1True(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.option1 && (!control.value || control.value === '')) {
        return { requiredIfOption1True: { value: control.value } };
      }
      return null;
    };
  }

  requiredIfOption2True(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.option2 && (!control.value || control.value === '')) {
        return { requiredIfOption2True: { value: control.value } };
      }
      return null;
    };
  }

  quesionOptions(num: number, bool: boolean) {
    if (num == 1){
      this.option1 = bool;
      if (!bool) this.registerForm.controls['q19'].reset(); 
    } 
    if (num == 2){
      this.option2 = bool;
      if (!bool) this.registerForm.controls['q23'].reset();
    } 
  }

  checkEvaluationCompletion() {
    this.authService
      .checkQuestionCompletion('FMW_003_FR_Eval_01', 'FMW_003_FR_E_01')
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.doctor_answer) {
            this.submitted = true;
          }
        },
        error: (e) => console.log(e),
      });
  }

  CONTINE() {
    window.open('Certificat', '_self');
  }

  onSubmit() {
    this.onSubmitpressed = true;
    console.log('form data is ', this.registerForm.value);

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      this.sendNotification(
        'Veillez à répondre à tous les champs obligatoires'
      );
      return;
    }
    this.authService
      .submitEvaluation(this.registerForm.value, 'FMW_003_FR_Eval_01')
      .pipe(first())
      .subscribe((data) => {
        if (data.status == 'submitted') {
          this.authService.updateevalstatus(true);
        }
      });
    this.submitted = true;
    window.open('Certificat', '_self');
  }

  sendNotification(text: string) {
    this.snackBar.open(text, '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
