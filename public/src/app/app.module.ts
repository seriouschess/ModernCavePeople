import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'; //manually added
import { FormsModule } from '@angular/forms'; //manuall added
import { DisplayComponent } from './display/display.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NewImageComponent } from './new-image/new-image.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { InnerDisplayComponent } from './inner-display/inner-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PageNotFoundComponent,
    HomeComponent,
    NewImageComponent,
    EditImageComponent,
    DisplayAllComponent,
    InnerDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }