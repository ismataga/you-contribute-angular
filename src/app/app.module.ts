import { NgModule } from '@angular/core';



import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'import', component: ImportComponent},
  {path: '', redirectTo: 'home' , pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent,

  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
