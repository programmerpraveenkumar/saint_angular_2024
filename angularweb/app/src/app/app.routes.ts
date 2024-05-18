import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {"path":"home","component":HomeComponent,canActivate:[authGuard]},
    {"path":"login","component":LoginComponent},
    {
        path:"admin",
        loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    }
];
