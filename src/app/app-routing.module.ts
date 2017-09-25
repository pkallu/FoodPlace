import { ProfileComponent } from './profile/profile.component';
import { SearchrecipeComponent } from './searchrecipe/searchrecipe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
const appRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
  children:
  [{path: 'searchrecipe', component: SearchrecipeComponent},
    {path: 'profile', component: ProfileComponent}]},
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
