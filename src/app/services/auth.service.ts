import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';

import { User } from '../components/models/user.models';
import { Evaluation } from '../components/models/evaluation.models';
import { Token } from '../components/models/token.models';
import { Program } from '../components/models/program.models';
import { Questions } from '../components/models/question.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://dxlink.ca/slim_api';

  token: any;
  tokenData = {} as Token;
  question = {} as Questions;

  private isLoggedIn = new BehaviorSubject('false');
  currentLogInStatus = this.isLoggedIn.asObservable();

  evaluation = {} as Evaluation;

  userDetails: any;

  private case1status = new BehaviorSubject(false);
  currentcase1status = this.case1status.asObservable();
  private case2status = new BehaviorSubject(false);
  currentcase2status = this.case2status.asObservable();
  private case3status = new BehaviorSubject(false);
  currentcase3status = this.case3status.asObservable();
  private case4status = new BehaviorSubject(false);
  currentcase4status = this.case4status.asObservable();
  private evalstatus = new BehaviorSubject(false);
  currentevalstatus = this.evalstatus.asObservable();

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getUserDetails() {
    this.getToken();
    let body = JSON.stringify(this.tokenData);
    return this.http.post(`${this.baseUrl}/getUserData`, body).pipe(
      map((res: any) => {
        // console.log(res['data']);
        return res['data'];
      })
    );
  }
  updateCase1status(status: any) {
    this.case1status.next(status);
  }
  updateCase2status(status: any) {
    this.case2status.next(status);
  }
  updateCase3status(status: any) {
    this.case3status.next(status);
  }
  updateCase4status(status: any) {
    this.case4status.next(status);
  }
  updateevalstatus(status: any) {
    this.evalstatus.next(status);
  }

  async getToken() {
    this.tokenData.token = this.storageService.getToken()!;
  }

  login(user: User) {
    let body = JSON.stringify(user);
    return this.http.post(`${this.baseUrl}/login`, body).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  validateToken() {
    this.getToken();
    let body = JSON.stringify(this.tokenData);
    // console.log(body);
    return this.http.post(`${this.baseUrl}/validateToken`, body).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updatedTimeSpent() {
    let program = {} as Program;
    this.getToken();
    program.token = this.tokenData.token;
    program.program_id = 'FMW_003';
    let body = JSON.stringify(program);
    return this.http.post(`${this.baseUrl}/updatedTimeSpent`, body).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  checkUserDetails() {
    this.getToken();
    let body = JSON.stringify(this.tokenData);
    return this.http.post(`${this.baseUrl}/getUserData`, body).pipe(
      map((res: any) => {
        //  console.log(res['data']);
        return res['data'];
      })
    );
  }

  submitEvaluation(question: Evaluation, programs_section_id: any) {
    question.token = this.tokenData.token;
    question.programs_section_id = programs_section_id;
    question.question_id = 'FMW_003_E_0';
    question.number_of_questions = 25;

    let body = JSON.stringify(question);
    // console.log('the body \n',body);
    return this.http.post(`${this.baseUrl}/submitQuestion`, body).pipe(
      map((res: any) => {
        // console.log('the res[\'data\'] \n',res['data']);
        return res['data'];
      })
    );
  }

  submitQuestion(section_id: any, question_id: any, answer: any) {
    let question = {} as Questions;
    this.getToken();
    question.token = this.tokenData.token;
    question.programs_section_id = section_id;
    question.question_id = question_id;
    question.answer = answer;
    let body = JSON.stringify(question);
    //console.log(body);
    return this.http
      .post(`${this.baseUrl}/submitIndividualQuestion`, body)
      .pipe(
        map((res: any) => {
          // console.log(res['data']);
          return res['data'];
        })
      );
  }

  checkQuestionCompletion(section_id: any, question_id: any) {
    let question = {} as Questions;
    this.getToken();
    question.token = this.tokenData.token;
    question.programs_section_id = section_id;
    question.question_id = question_id;
    let body = JSON.stringify(question);
    //console.log('checkQuestionCompletion body\n',body);
    return this.http.post(`${this.baseUrl}/checkQuestionCompletion`, body).pipe(
      map((res: any) => {
        // console.log('checkQuestionCompletion res[\'data\']\n',res['data']);
        return res['data'];
      })
    );
  }

  updateProgramCompletion() {
    this.evaluation.token = this.tokenData.token;
    this.evaluation.program_id = 'FMW_003';
    this.evaluation.certificate_id = 'FMW_003';
    // console.log(evaluation);
    let body = JSON.stringify(this.evaluation);
    // console.log(body);
    return this.http.post(`${this.baseUrl}/updateProgramCompletion`, body).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  updateStat() {
    let program = {} as Program;
    this.getToken();
    program.token = this.tokenData.token;
    program.program_id = 'FMW_003';
    // program.program_username_id = "PFZ_057_Guest";
    // console.log(program.token);
    let body = JSON.stringify(program);
    return this.http.post(`${this.baseUrl}/updateStat`, body).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  changeStatus(message: string) {
    this.isLoggedIn.next(message);
  }

  peerAnswers(section_id: any, question_id: any) {
    let question = {} as Questions;
    this.getToken();
    question.token = this.tokenData.token;
    question.programs_section_id = section_id;
    question.question_id = question_id;
    let body = JSON.stringify(question);
    // console.log(body);
    return this.http.post(`${this.baseUrl}/peerAnswers`, body).pipe(
      map((res: any) => {
        console.log('data', res['data']);
        return res['data'];
      })
    );
  }
}
