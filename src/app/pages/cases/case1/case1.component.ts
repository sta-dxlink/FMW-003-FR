import { StorageService } from './../../../services/storage.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { scaleIn, scaleOut } from 'src/app/components/animation';
import { Case1 } from 'src/app/components/things';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.scss'],
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
export class Case1Component {
  count = 0;
  Case = Case1;
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
      name3: this.formBuilder.array([]),
      name4: this.formBuilder.array([]),
    });

    this.checkCase_Question1Completion(
      'FMW_003_FR_Case_01',
      'FMW_003_FR_CASE1_01',
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_FR_Case_01',
      'FMW_003_FR_CASE1_02',
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_FR_Case_01',
      'FMW_003_FR_CASE1_03',
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_FR_Case_01',
      'FMW_003_FR_CASE1_04',
      3
    );

    this.peerAnswersQuestion1();
    this.peerAnswersQuestion2();
    this.peerAnswersQuestion3();
    this.peerAnswersQuestion4();
  }
  BACK() {
    if (this.count == 0) {
      window.open('Accueil', '_self');
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
        'Veillez à répondre à la question et cliquez sur le bouton "soumettre".'
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
        'Veillez à répondre à la question et cliquez sur le bouton "soumettre".'
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
        'Veillez à répondre à la question et cliquez sur le bouton "soumettre".'
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
        'Veillez à répondre à la question et cliquez sur le bouton "soumettre".'
      );
      return;
    } else {
      // this.onSubmit(id);
    }
    if (this.count == 8) {
      window.open('PatientCas/cas2', '_self');
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
      this.sendNotification('Veillez à répondre à la question');
      return;
    } else if (id == 0) {
      this.submitted[0] = true;
      this.Answer[0] = this.registerForm.value.name.toString();
      this.storageService.sendQuestion(
        'FMW_003_FR_Case_01',
        'FMW_003_FR_CASE1_01',
        this.Answer[0],
        this.authService
      );
    }
    if (!this.registerForm.value.name2.toString() && id == 2) {
      this.sendNotification('Veillez à répondre à la question');
      return;
    } else if (id == 2) {
      this.submitted[1] = true;
      this.Answer[1] = this.registerForm.value.name2.toString();
      this.storageService.sendQuestion(
        'FMW_003_FR_Case_01',
        'FMW_003_FR_CASE1_02',
        this.Answer[1],
        this.authService
      );
    }
    if (!this.registerForm.value.name3.toString() && id == 4) {
      this.sendNotification('Veillez à répondre à la question');
      return;
    } else if (id == 4) {
      this.submitted[2] = true;
      this.Answer[2] = this.registerForm.value.name3.toString();
      this.storageService.sendQuestion(
        'FMW_003_FR_Case_01',
        'FMW_003_FR_CASE1_03',
        this.Answer[2],
        this.authService
      );
    }
    if (!this.registerForm.value.name4.toString() && id == 6) {
      this.sendNotification('Veillez à répondre à la question');
      return;
    } else if (id == 6) {
      this.submitted[3] = true;
      this.Answer[3] = this.registerForm.value.name4.toString();
      this.storageService.sendQuestion(
        'FMW_003_FR_Case_01',
        'FMW_003_FR_CASE1_04',
        this.Answer[3],
        this.authService
      );
    }
  }

  sendNotification(text: string) {
    this.snackBar.open(text, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  AnswerPro(id: number) {
    if (id == 0) {
      return 'Il n\'y a pas de « bonne » réponse. Il s’agit de réfléchir à ce que vous feriez. Le Dr. Bari fournira un contexte supplémentaire dans sa prochaine vidéo.';
    }
    if (id == 2) {
      return this.Answer[1].includes('b)') &&
        !(
          this.Answer[1].includes('a)') ||
          this.Answer[1].includes('c)') ||
          this.Answer[1].includes('d)')
        )
        ? 'Votre réponse est exacte &#10004; '
        : 'La bonne réponse est b): La 2<sup>e</sup> génération d\'analogues basaux présente un risque moindre d\'hypoglycémie. ';
    }
    if (id == 4) {
      return this.Answer[2].includes('a)') &&
        !(
          this.Answer[2].includes('b)') ||
          this.Answer[2].includes('c)') ||
          this.Answer[2].includes('d)')
        )
        ? 'Votre réponse est exacte &#10004; '
        : 'La bonne réponse est a):	Les stylos à insuline doivent être amorcés chaque fois avant le dosage. ';
    }
    if (id == 6) {
      return this.Answer[3].includes('a)') &&
        this.Answer[3].includes('c)') &&
        !(this.Answer[3].includes('b)') || this.Answer[3].includes('d)'))
        ? 'Votre réponse est exacte &#10004; '
        : 'Les réponses correctes sont a) and c): Augmenter la dose d\'insuline glargine et réévaluer la technique d\'injection. ';
    }

    return '';
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
      .peerAnswers('FMW_003_FR_Case_01', 'FMW_003_FR_CASE1_01')
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
          this.Q1PeerOccurence.push(
            this.getQccurrence('e)', this.Q1PeerAnswers)
          );
          this.Q1PeerOccurence.push(
            this.getQccurrence('f)', this.Q1PeerAnswers)
          );
          this.Q1PeerOccurence.push(
            this.getQccurrence('g)', this.Q1PeerAnswers)
          );
        },
      });
  }

  peerAnswersQuestion2() {
    this.authService
      .peerAnswers('FMW_003_FR_Case_01', 'FMW_003_FR_CASE1_02')
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
      .peerAnswers('FMW_003_FR_Case_01', 'FMW_003_FR_CASE1_03')
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
      .peerAnswers('FMW_003_FR_Case_01', 'FMW_003_FR_CASE1_04')
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
