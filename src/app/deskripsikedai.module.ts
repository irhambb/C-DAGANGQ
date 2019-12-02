import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeskripsikedaiPage } from './deskripsikedai.page';

const routes: Routes = [
  {
    path: '',
    component: DeskripsikedaiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeskripsikedaiPage]
})
export class DeskripsikedaiPageModule {}
