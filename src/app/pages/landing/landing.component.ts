import { cases, committee } from './../../components/people';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';
import { Learning_Objectives } from 'src/app/components/things';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  committee = committee;
  lo = Learning_Objectives;
  Cases = cases;

  constructor(
    // public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public zone: NgZone,
    private route: Router
  ) // public authService: AuthService,
  // public storageService: StorageService
  {}
  ngOnInit(): void {
    AOS.init();
  }
  sendTo(url: string) {
    window.open(url, '_self');
  }
}
