import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ModalModule} from './modal/modal.module';
import {FormsModule} from '@angular/forms';
import {ModalService} from './modal/modal.service';



@NgModule({
  declarations: [HeaderComponent, LoginFormComponent],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule
  ],
  entryComponents: [
    LoginFormComponent
  ]
})
export class SharedModule { }
