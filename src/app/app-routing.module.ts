import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'daftar', loadChildren: './daftar/daftar.module#DaftarPageModule' },
  { path: 'halaman-awal', loadChildren: './halaman-awal/halaman-awal.module#HalamanAwalPageModule' },00
  { path: 'deskripsikedai', loadChildren: './deskripsikedai/deskripsikedai.module#DeskripsikedaiPageModule' },
  { path: 'editprofil', loadChildren: './editprofil/editprofil.module#EditprofilPageModule' },
  { path: 'akun', loadChildren: './akun/akun.module#AkunPageModule' },
  { path: 'lokasihidupmati', loadChildren: './lokasihidupmati/lokasihidupmati.module#LokasihidupmatiPageModule' },

<<<<<<< HEAD
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'daftar', loadChildren: './daftar/daftar.module#DaftarPageModule' },
  { path: 'halaman-awal', loadChildren: './halaman-awal/halaman-awal.module#HalamanAwalPageModule' },
  { path: 'deskripsikedai', loadChildren: './deskripsikedai/deskripsikedai.module#DeskripsikedaiPageModule' },
  { path: 'editprofil', loadChildren: './editprofil/editprofil.module#EditprofilPageModule' },
  { path: 'akun', loadChildren: './akun/akun.module#AkunPageModule' },
  { path: 'lokasihidupmati', loadChildren: './lokasihidupmati/lokasihidupmati.module#LokasihidupmatiPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> 7486ab2e8f5e950f90fd415c271b3b64d4cfb642
