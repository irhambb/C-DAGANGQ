import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HalamanAwalPage } from './halaman-awal.page';

const routes: Routes = [
  {
    path: '',
    component: HalamanAwalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HalamanAwalPage]
})
export class HalamanAwalPageModule {}
