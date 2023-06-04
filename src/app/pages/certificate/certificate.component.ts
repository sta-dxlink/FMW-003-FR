import { Component, ElementRef, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
declare let html2pdf: any;
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { User } from 'src/app/components/models/user.models';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  user = {} as User;
  dateOfCompletion: any;
  Completed: boolean[][] = new Array(5);
  // certificate = false;
  hours = 0;
  showCertificate = false;

  constructor(
    public authService: AuthService,
    public storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
    for (let i = 0; i < this.Completed.length; i++) {
      this.Completed[i] = new Array(4);
      this.Completed[i].fill(false);
    }
    console.log(this.Completed);
    this.checkEvaluationCompletion();
    //q1
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_01',
      0,
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_02',
      0,
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_03',
      0,
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_01',
      'FMW_003_CASE1_04',
      0,
      3
    );
    //q2
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_01',
      1,
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_02',
      1,
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_03',
      1,
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_02',
      'FMW_003_CASE2_04',
      1,
      3
    );
    //q3
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_01',
      2,
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_02',
      2,
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_03',
      2,
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_03',
      'FMW_003_CASE3_04',
      2,
      3
    );
    //q4
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_01',
      3,
      0
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_02',
      3,
      1
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_03',
      3,
      2
    );
    this.checkCase_Question1Completion(
      'FMW_003_Case_04',
      'FMW_003_CASE4_04',
      3,
      3
    );

    //console.log(this.Completed);
  }

  getUserDetails() {
    this.authService
      .getUserDetails()
      .pipe(first())
      .subscribe((data) => {
        this.user.firstName = data.first_name;
        this.user.lastName = data.last_name;
      });
  }

  updateCert() {
    console.log(this.Completed);
    if (this.Completed.some((row) => row.includes(true))) {
      console.log('Certificate updated');
      this.updateCerticate();
      this.dateOfCompletion = new Date();
    }
  }

  updateCerticate() {
    this.authService
      .updateProgramCompletion()
      .pipe(first())
      .subscribe({
        next: (data) => {
          // this.certificate = true;
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  checkCase_Question1Completion(
    pid: string,
    qid: string,
    row: number,
    column: number
  ) {
    this.authService
      .checkQuestionCompletion(pid, qid)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.doctor_answer) {
            this.Completed[row][column] = true;
            this.updateCert();
            if(this.Completed[row].every((value) => value === true)){
              this.hours += 0.5;
            }
          }
        },
        error: (e) => console.log(e),
      });
    this.updateCert();
  }

  checkEvaluationCompletion() {
    this.authService
      .checkQuestionCompletion('FMW_003_Eval_01', 'FMW_003_E_01')
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.doctor_answer) {
            this.Completed[4].fill(true);
            this.updateCert();
          }
        },
        error: (e) => console.log(e),
      });
  }

  @ViewChild('certificatetemplate') pdfTable!: ElementRef;

  downloadPDF() {

    this.showCertificate = true;
    var nativeElement = document.getElementById(
      'certificate_template'
    )?.innerHTML;
    let options = {
      margin: [0, 0, 0, 0],
      filename: 'certificate.pdf',
      html2canvas: {
        dpi: 300,
        letterRendering: true,
        allowTaint: true,
        useCORS: true,
        logging: false,
        scale: 1,
        scrollY: 0,
      },
      jsPDF: {
        orientation: 'portrait',
        unit: 'px',
        format: [4000, 5176],
      },
    };
    const pdf = html2pdf().set(options).from(nativeElement);
    pdf.save().finally(() => {});
  }
}
