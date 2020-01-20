import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';
import {LoginFormComponent} from '../login-form/login-form.component';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modal: ModalService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.modal.open(LoginFormComponent, {data: {title: 'Please Log in'}})

  }

}
