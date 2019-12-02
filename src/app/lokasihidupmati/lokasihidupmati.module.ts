import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LokasihidupmatiPage } from './lokasihidupmati.page';

const routes: Routes = [
  {
    path: '',
    component: LokasihidupmatiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LokasihidupmatiPage]
})
export class LokasihidupmatiPageModule {}
