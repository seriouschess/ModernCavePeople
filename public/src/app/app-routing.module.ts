import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { InnerDisplayComponent } from './inner-display/inner-display.component';
import { EditImageComponent } from './edit-image/edit-image.component';

const routes: Routes = [
  {path: 'image/new', component: HomeComponent},
  {path: 'test', component: InnerDisplayComponent},
  {path: 'display', component: DisplayComponent  },
  {path: 'edit/:id', component: EditImageComponent },
  {path: '', pathMatch:'full', redirectTo: '/display'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
