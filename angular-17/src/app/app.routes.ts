import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


/*
localhost:4200/home->HomeComponent
localhost:4200/about->AboutComponent
localhost:4200/contact->ContactComponent
localhost:4200/gallery->HomeComponent
*/
export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}
];
