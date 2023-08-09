import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './app.grocery';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GroceryComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    //HttpModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
