import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahjualanPage } from './tambahjualan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahjualanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahjualanPage]
})
export class TambahjualanPageModule {}
