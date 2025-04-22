import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConvertComponent } from './convert/convert.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'convert', component: ConvertComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];
