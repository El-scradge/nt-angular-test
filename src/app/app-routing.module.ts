import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanySearchComponent} from './company/company-search/company-search.component';
import {CompanyInfoComponent} from './company/company-info/company-info.component';


const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
