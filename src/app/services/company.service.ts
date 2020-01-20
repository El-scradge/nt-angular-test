import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ApiCallsService} from './api-calls.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyData = {} //removed from repo
  officerData = {} //removed from repo
  private searchOptions$ = new BehaviorSubject({});
  private companyList$ = new BehaviorSubject<any>(this.companyData);
  private selectedCompany$ = new BehaviorSubject<any>({});
  private officersList$ = new BehaviorSubject(this.officerData);


  constructor(private apiCalls: ApiCallsService) { }


  /**
   *  get and set the search options;
   */

  get searchOptions() {
    return this.searchOptions$;
  }
  set searchOptions(value) {
    this.searchOptions$.next(value);
  }

  get companyList() {
    return this.companyList$;
  }
  set companyList(value) {
    this.companyList$.next(value);
  }

  get selectedCompany() {
    return this.selectedCompany$;
  }

  set selectedCompany(value) {
    this.selectedCompany$.next(value);
  }

  get officersList() {
    return this.officersList$;
  }
  // set officersList(value) {
  //   this.officersList$.next(value);
  // }

}
