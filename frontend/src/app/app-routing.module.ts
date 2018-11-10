import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DrawsComponent } from './components/gallery/draws/draws.component';
import { AllComponent } from './components/gallery/all/all.component';
import { PaintsComponent } from './components/gallery/paints/paints.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent,
  children: [
    {path:'all',component:AllComponent},
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'draws', component: DrawsComponent },
    { path: 'paints', component: PaintsComponent }    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
