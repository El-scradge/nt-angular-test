import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompanySearchComponent} from './company-search/company-search.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {CompanyResultsComponent} from './company-results/company-results.component';
import {OfficerListComponent} from './officer-list/officer-list.component';
import {AuthGuardService} from '../guards/auth-guard.service';


const routes: Routes = [
  { path: 'company', component: CompanyResultsComponent},
  { path: 'company/:id', component: CompanyInfoComponent, canActivate: [AuthGuardService]},
  { path: 'company/:id/officers', component: OfficerListComponent, canActivate: [AuthGuardService]},

  { path: 'company/info', component: CompanyInfoComponent, canActivate: [AuthGuardService]},

  { path: 'search', component: CompanySearchComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class CompanyRoutingModule { }
