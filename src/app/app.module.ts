import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

//https://ng-recipe-book-3e2c0-default-rtdb.europe-west1.firebasedatabase.app/
@NgModule({
	declarations: [
	AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		SharedModule,
		ShoppingListModule,
		AuthModule,
		CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
