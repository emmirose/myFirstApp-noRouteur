import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent, pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
];

export { ROUTES };
