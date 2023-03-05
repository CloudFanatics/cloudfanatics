import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routes/app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { AboutComponent } from '../components/about/about.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'lan', component: AppComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' }

];


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  providers: [],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

