import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

const components = [ LoginComponent ];

@NgModule({
	declarations: [ ...components ],
	imports: [ CommonModule, ReactiveFormsModule ],
	exports: [ ...components ]
})
export class LoginModule {}
