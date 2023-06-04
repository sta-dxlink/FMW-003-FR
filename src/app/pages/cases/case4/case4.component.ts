import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { scaleIn, scaleOut } from 'src/app/components/animation';
import { Case4 } from 'src/app/components/things';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-case4',
  templateUrl: './case4.component.html',
  styleUrls: ['./case4.component.scss'],
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
export class Case4Component {
  count = 0;
  Case = Case4;
  registerForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  submitted: boolean[] = Array(4).fill(false);
  Answer: String[] = Array(4);
  //for the peers answers
  Q1PeerAnswers = [];
  Q2PeerAnswers = [];
  Q3PeerAnswers = [];
  Q4PeerAnswers = [];
  Q1PeerOccurence: any = [];
  Q2PeerOccurence: any = [];
  Q3PeerOccurence: any = [];
  Q4PeerOccurence: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    public storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.submitted = Array(4).fill(false);
    //this is necessary for the validation
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.array([]),
      name2: this.formBuilder.array([]),
      name3: ['', [Validators.required]],
      name4: this.formBuilder.array([]),
    });

    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_01',
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_02',
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_03',
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_04',
      3
    );

    this.peerAnswersQuestion1();
    this.peerAnswersQuestion2();
    this.peerAnswersQuestion3();
    this.peerAnswersQuestion4();
  }

  BACK() {
    if (this.count == 0) {
      window.open('PatientCases/case3', '_self');
    }
    this.count--;
  }

  CONTINE(id?: number) {
    // stop the process here if form is invalid
    // stop the process here if form is invalid
    if (
      (!this.Answer[0] && id == 0 && !this.submitted[0]) ||
      (this.Answer[0] && id == 0 && !this.submitted[0])
    ) {
      this.sendNotification(
        'Be sure to complete the question and click the submit button'
      );
      return;
    } else {
      //  this.onSubmit(id)
    }
    if (
      (!this.Answer[1] && id == 2 && !this.submitted[1]) ||
      (this.Answer[1] && id == 2 && !this.submitted[1])
    ) {
      this.sendNotification(
        'Be sure to complete the question and click the submit button'
      );
      return;
    } else {
      //this.onSubmit(id);
    }
    if (
      (!this.Answer[2] && id == 4 && !this.submitted[2]) ||
      (this.Answer[2] && id == 4 && !this.submitted[2])
    ) {
      this.sendNotification(
        'Be sure to complete the question and click the submit button'
      );
      return;
    } else {
      //this.onSubmit(id);
    }
    if (
      (!this.Answer[3] && id == 6 && !this.submitted[3]) ||
      (this.Answer[3] && id == 6 && !this.submitted[3])
    ) {
      this.sendNotification(
        'Be sure to complete the question and click the submit button'
      );
      return;
    } else {
      // this.onSubmit(id);
    }
    if (this.count == 8) {
      window.open('Evaluation', '_self');
    }
    this.count++;
  }

  onChange(answer: string, isChecked: boolean, id: number) {
    var questions = this.registerForm.controls.name as FormArray;

    if (id == 0) {
      questions = this.registerForm.controls.name as FormArray;
    } else if (id == 2) {
      questions = this.registerForm.controls.name2 as FormArray;
    } else if (id == 4) {
      questions = this.registerForm.controls.name3 as FormArray;
    } else if (id == 6) {
      questions = this.registerForm.controls.name4 as FormArray;
    }

    if (isChecked) {
      questions.push(new FormControl(answer));
    } else {
      const index = questions.controls.findIndex((x) => x.value === answer);
      questions.removeAt(index);
    }
  }

  onSubmit(id?: number) {
    console.log(
      'form 1 data is ',
      this.registerForm.value.name.toString(),
      '\n',
      'form 2 data is ',
      this.registerForm.value.name2.toString(),
      '\n',
      'form 3 data is ',
      this.registerForm.value.name3.toString(),
      '\n',
      'form 4 data is ',
      this.registerForm.value.name4.toString(),
      '\n',
      JSON.stringify(this.registerForm.value.name.toString())
    );

    // stop the process here if form is invalid
    if (!this.registerForm.value.name.toString() && id == 0) {
      this.sendNotification('Be sure to complete the question');
      return;
    } else if (id == 0) {
      this.submitted[0] = true;
      this.Answer[0] = this.registerForm.value.name.toString();
      this.storageService.sendQuestion(
        'FMW_003_Case_04',
        'FMW_003_CASE4_01',
        this.Answer[0],
        this.authService
      );
    }
    if (!this.registerForm.value.name2.toString() && id == 2) {
      this.sendNotification('Be sure to complete the question');
      return;
    } else if (id == 2) {
      this.submitted[1] = true;
      this.Answer[1] = this.registerForm.value.name2.toString();
      this.storageService.sendQuestion(
        'FMW_003_Case_04',
        'FMW_003_CASE4_02',
        this.Answer[1],
        this.authService
      );
    }
    if (!this.registerForm.value.name3.toString() && id == 4) {
      this.sendNotification('Be sure to complete the question');
      return;
    } else if (id == 4) {
      this.submitted[2] = true;
      this.Answer[2] = this.registerForm.value.name3.toString();
      this.storageService.sendQuestion(
        'FMW_003_Case_04',
        'FMW_003_CASE4_03',
        this.Answer[2],
        this.authService
      );
    }
    if (!this.registerForm.value.name4.toString() && id == 6) {
      this.sendNotification('Be sure to complete the question');
      return;
    } else if (id == 6) {
      this.submitted[3] = true;
      this.Answer[3] = this.registerForm.value.name4.toString();
      this.storageService.sendQuestion(
        'FMW_003_Case_04',
        'FMW_003_CASE4_04',
        this.Answer[3],
        this.authService
      );
    }
  }

  AnswerPro(id: number) {
    if (id == 0) {
      return this.Answer[0].includes('a)') &&
        !(
          this.Answer[0].includes('b)') ||
          this.Answer[0].includes('c)') ||
          this.Answer[0].includes('d)')
        )
        ? 'Your answer is correct &#10004; '
        : 'The correct answer is a). Increase insulin glargine dose.';
    }
    if (id == 2) {
      return this.Answer[1].includes('b)') &&
        this.Answer[1].includes('d)') &&
        !(this.Answer[1].includes('a)') || this.Answer[1].includes('c)'))
        ? 'Your answer is correct &#10004; '
        : 'The correct answers are b) and d), add GLP-1 RA and discontinue sitagliptin and change sitagliptin and GLP-1 RA/insulin to fixed dose combination.';
    }
    if (id == 4) {
      return this.Answer[2].includes('b)') &&
        !(
          this.Answer[2].includes('a)') ||
          this.Answer[2].includes('c)') ||
          this.Answer[2].includes('d)')
        )
        ? 'Your answer is correct &#10004; '
        : 'The correct answer is b), 30 units. ';
    }
    if (id == 6) {
      return this.Answer[3].includes('d)') &&
        !(
          this.Answer[3].includes('a)') ||
          this.Answer[3].includes('b)') ||
          this.Answer[3].includes('c)')
        )
        ? 'Your answer is correct &#10004; '
        : 'The correct answer is d), provide the patient with some suggestions that may help her upset stomach, including: encouraging her to eat slow, avoid fried or spicy foods and to eat smaller portions.';
    }

    return '';
  }
  sendNotification(text: string) {
    this.snackBar.open(text, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  checkCase_Question1Completion(pid: string, qid: string, where: number) {
    this.authService
      .checkQuestionCompletion(pid, qid)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.doctor_answer) {
            this.Answer[where] = data.doctor_answer;
            this.submitted[where] = true;
          }
        },
        error: (e) => console.log(e),
      });
  }

  peerAnswersQuestion1() {
    this.authService
      .peerAnswers('FMW_003_Case_04', 'FMW_003_CASE4_01')
      .pipe(first())
      .subscribe({
        next: (data) => {
          let answers: any = [];

          data.forEach(function (answer: any) {
            answers.push(answer.doctor_answer);
          });

          this.Q1PeerAnswers = answers;

          this.Q1PeerOccurence.push(
            this.getQccurrence('a)', this.Q1PeerAnswers)
          );
          this.Q1PeerOccurence.push(
            this.getQccurrence('b)', this.Q1PeerAnswers)
          );
          this.Q1PeerOccurence.push(
            this.getQccurrence('c)', this.Q1PeerAnswers)
          );
          this.Q1PeerOccurence.push(
            this.getQccurrence('d)', this.Q1PeerAnswers)
          );
        },
      });
  }

  peerAnswersQuestion2() {
    this.authService
      .peerAnswers('FMW_003_Case_04', 'FMW_003_CASE4_02')
      .pipe(first())
      .subscribe({
        next: (data) => {
          let answers: any = [];

          data.forEach(function (answer: any) {
            answers.push(answer.doctor_answer);
          });

          this.Q2PeerAnswers = answers;

          this.Q2PeerOccurence.push(
            this.getQccurrence('a)', this.Q2PeerAnswers)
          );
          this.Q2PeerOccurence.push(
            this.getQccurrence('b)', this.Q2PeerAnswers)
          );
          this.Q2PeerOccurence.push(
            this.getQccurrence('c)', this.Q2PeerAnswers)
          );
          this.Q2PeerOccurence.push(
            this.getQccurrence('d)', this.Q2PeerAnswers)
          );
        },
      });
  }

  peerAnswersQuestion3() {
    this.authService
      .peerAnswers('FMW_003_Case_04', 'FMW_003_CASE4_03')
      .pipe(first())
      .subscribe({
        next: (data) => {
          let answers: any = [];

          data.forEach(function (answer: any) {
            answers.push(answer.doctor_answer);
          });

          this.Q3PeerAnswers = answers;

          this.Q3PeerOccurence.push(
            this.getQccurrence('a)', this.Q3PeerAnswers)
          );
          this.Q3PeerOccurence.push(
            this.getQccurrence('b)', this.Q3PeerAnswers)
          );
          this.Q3PeerOccurence.push(
            this.getQccurrence('c)', this.Q3PeerAnswers)
          );
          this.Q3PeerOccurence.push(
            this.getQccurrence('d)', this.Q3PeerAnswers)
          );
        },
      });
  }

  peerAnswersQuestion4() {
    this.authService
      .peerAnswers('FMW_003_Case_04', 'FMW_003_CASE4_04')
      .pipe(first())
      .subscribe({
        next: (data) => {
          let answers: any = [];

          data.forEach(function (answer: any) {
            answers.push(answer.doctor_answer);
          });

          this.Q4PeerAnswers = answers;

          this.Q4PeerOccurence.push(
            this.getQccurrence('a)', this.Q4PeerAnswers)
          );
          this.Q4PeerOccurence.push(
            this.getQccurrence('b)', this.Q4PeerAnswers)
          );
          this.Q4PeerOccurence.push(
            this.getQccurrence('c)', this.Q4PeerAnswers)
          );
          this.Q4PeerOccurence.push(
            this.getQccurrence('d)', this.Q4PeerAnswers)
          );
        },
      });
  }

  getQccurrence(answer: any, PeerAnswer: any[]) {
    return PeerAnswer.filter((v: any) => v.includes(answer)).length;
  }
}