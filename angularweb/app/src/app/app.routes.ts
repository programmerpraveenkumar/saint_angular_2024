import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [
    {"path":"home","component":HomeComponent},
    {"path":"home/:username","component":HomeComponent},
    {"path":"user","component":UserDetailComponent},
    {"path":"about","component":AboutComponent},
    {"path":"login","component":LoginComponent},
    {
        path:"admin",
        loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    }
];
// ?name=awefew&awewe