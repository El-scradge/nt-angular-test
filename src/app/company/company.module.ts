import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySearchComponent } from './company-search/company-search.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import {CompanyRoutingModule} from './company-routing.module';
import {FormsModule} from '@angular/forms';
import { CompanyResultsComponent } from './company-results/company-results.component';
import { OfficerListComponent } from './officer-list/officer-list.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CompanySearchComponent,
    CompanyInfoComponent,
    CompanyResultsComponent,
    OfficerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
