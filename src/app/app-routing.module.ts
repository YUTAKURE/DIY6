import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';
import { AuthGuard } from './auth.guard';
import { ChildAComponent } from './components/secret/child-a/child-a.component';
import { ChildBComponent } from './components/secret/child-b/child-b.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'secret',
    component: SecretComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
