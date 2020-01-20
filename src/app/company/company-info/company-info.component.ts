import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  currentCompany;

  private subscriptions = [];
  constructor(
    private router: Router,
    private companyService: CompanyService
  ) {
    this.subscriptions.push(this.companyService.selectedCompany.subscribe( data => {
      this.currentCompany = data;
    }));
  }

  ngOnInit() {
  }

  searchCompanies() {

  }
}
