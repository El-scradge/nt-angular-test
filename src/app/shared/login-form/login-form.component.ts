import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalService} from '../modal/modal.service';
import {ModalRef} from '../modal/modal-ref';
import {ModalConfig} from '../modal/modal-config';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  inputData;

  errorMessage;
  constructor(
    private modal: ModalRef,
    public config: ModalConfig,
    private loginService: LoginService
  ) {
    this.inputData = this.config.data;
  }

  ngOnInit() {
  }

  onLoginAction(formData: NgForm) {
    const loginAuthorised = this.loginService.loginAction(formData.form.value);
    if (loginAuthorised === 'authorised') {
      this.loginService.loggedIn = formData.form.value;
      this.modal.close(formData.form.value);
    } else {
      this.errorMessage = loginAuthorised;
    }
  }
}
