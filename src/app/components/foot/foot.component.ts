import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss'],
})
export class FootComponent {
  url = '';
  white = false;
  blue = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
        if (this.url == '/') {
          this.white = true;
          this.blue = false;
        } else {
          this.white = false;
          this.blue = true;
        }
      });
  }

  ngAfterViewChecked(): void {
     if (this.blue) {
       var Pcase = document.getElementById('foot');
       Pcase!.style.backgroundImage =
         'linear-gradient(to right, #014f72, #0077a0)';
       Pcase!.style.color = 'white';
     }
  }
}
