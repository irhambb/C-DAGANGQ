import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dagangant',
  templateUrl: './dagangant.page.html',
  styleUrls: ['./dagangant.page.scss'],
})
export class DagangantPage implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/home']);
  }
  
  maps() {
    this.router.navigate(['/maps']);
  }

}
