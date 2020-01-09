import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public router: Router) {}

 ngOnInit() {
  }
  
  pBalik() {
	  this.router.navigate(['/profil']);
  }

  kembali() {
    this.router.navigate(['/home']);
  }
}