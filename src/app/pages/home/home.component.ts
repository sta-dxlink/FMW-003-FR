import { Component } from '@angular/core';
import Aos from 'aos';
import { cases, committee } from 'src/app/components/people';
import { Learning_Objectives } from 'src/app/components/things';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  committee = committee;
  lo = Learning_Objectives;
  Cases = cases;

  ngOnInit(): void {
    Aos.init();
  }

  sendTo(url: string) {
    window.open(url, '_self');
  }
}
