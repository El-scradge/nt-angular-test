import { Component, OnInit } from '@angular/core';
import {ApiCallsService} from '../../services/api-calls.service';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {

  companyId;
  officers;
  subscriptions = [];
  constructor(
    private apiCallsService: ApiCallsService,
    private route: ActivatedRoute,
    private router: Router,
    public companyService: CompanyService,
  ) {
    this.subscriptions.push(this.companyService.officersList.subscribe( data => {
      this.officers = data;
    }));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // this.subscriptions.push(
    //   this.apiCallsService.getData(`Companies/v1/Officers?CompanyNumber=${id}`)
    //     .subscribe( officers => {
    //       this.officers = officers;
    //     }));
  }

}
