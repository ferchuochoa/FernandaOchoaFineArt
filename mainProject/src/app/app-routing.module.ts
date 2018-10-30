import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DrawingComponent } from './gallery/drawing/drawing.component';
import { GalleryHomeComponent } from './gallery/gallery-home/gallery-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent,
  children: [
    {path:'all',component:GalleryHomeComponent},
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'drawing', component: DrawingComponent }  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
