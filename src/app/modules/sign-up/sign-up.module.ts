import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SignUpModule {}
