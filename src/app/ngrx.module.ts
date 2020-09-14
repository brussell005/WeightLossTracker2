import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appState } from './store';

@NgModule({
	declarations: [],
	imports: [ StoreModule.forRoot(appState), StoreDevtoolsModule.instrument({ maxAge: false }) ]
})
export class NgrxModule {}
