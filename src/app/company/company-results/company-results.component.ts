import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {ApiCallsService} from '../../services/api-calls.service';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-results',
  templateUrl: './company-results.component.html',
  styleUrls: ['./company-results.component.scss']
})
export class CompanyResultsComponent implements OnInit, OnDestroy {

  companyList;
  subscriptions = [];

  constructor(
    private apiCalls: ApiCallsService,
    private companyService: CompanyService,
    private router: Router
    ) {
    this.subscriptions.push(this.companyService.companyList.subscribe( data => {
      this.companyList = data;
    }));
    this.subscriptions.push(this.companyService.searchOptions.subscribe( result => {
      console.log(result);
      this.searchCompanies(result.search);
    }));
  }

  ngOnInit() {
  }

  searchCompanies(searchTerm) {
    this.subscriptions.push(this.apiCalls.getData(`Companies/v1/Search?Query=${searchTerm}`)
      .subscribe(companies => {
        this.companyList = companies;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => {
      sub.unsubscribe();
    });
  }

  onMoreCompanyDetails(company) {

    this.companyService.selectedCompany = company;
    this.router.navigate(['/company/info']);
  }
}
