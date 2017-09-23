import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
const appRoutes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
];
@NgModule( {
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule {

}
