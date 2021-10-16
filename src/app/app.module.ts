import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
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
	providers: [ShoppingService, RecipeService, DataStorageService, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
