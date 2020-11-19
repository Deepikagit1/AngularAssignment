import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import{EditComponent} from './edit/edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: "user", component: UserComponent, canActivate: [AuthGuard] },
  { path: "logout", component: LoginComponent },
  { path: "add", component: EditComponent },
  { path: "view", component: ViewComponent },
  { path: "edit/:id", component: EditComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
