import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiCallsService} from '../../services/api-calls.service';
import {CompanyService} from '../../services/company.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  submitSearch(formData: NgForm) {
    this.companyService.searchOptions = formData.form.value;
    this.router.navigate(['/company']);
  }
}
