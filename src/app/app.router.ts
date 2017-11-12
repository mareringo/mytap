import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './utility/not-found/not-found.component';
import { TopsComponent } from './tops/tops.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'detail/:gid', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tops', component: TopsComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
