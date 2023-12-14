import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/users/list/list.component';
import { AddComponent } from './pages/users/add/add.component';
import { EditComponent } from './pages/users/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: ListComponent },
  { path: 'create/user', component: AddComponent },
  { path: 'edit/:id/user', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
