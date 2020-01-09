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
  { path: 'halaman-awal', loadChildren: './halaman-awal/halaman-awal.module#HalamanAwalPageModule' },
  { path: 'deskripsikedai', loadChildren: './deskripsikedai/deskripsikedai.module#DeskripsikedaiPageModule' },
  { path: 'editprofil', loadChildren: './editprofil/editprofil.module#EditprofilPageModule' },
  { path: 'akun', loadChildren: './akun/akun.module#AkunPageModule' },
  { path: 'lokasihidupmati', loadChildren: './lokasihidupmati/lokasihidupmati.module#LokasihidupmatiPageModule' },  { path: 'maps', loadChildren: './maps/maps.module#MapsPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'dagangant', loadChildren: './dagangant/dagangant.module#DagangantPageModule' },
  { path: 'tambahjualan', loadChildren: './tambahjualan/tambahjualan.module#TambahjualanPageModule' },
  { path: 'jualan', loadChildren: './jualan/jualan.module#JualanPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
