import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  { path: 'About-Me', component: AboutMeComponent },
  { path: 'Grid', component: GridComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AboutMeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
