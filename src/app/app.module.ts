import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, 
         TuiDialogModule, 
         TuiNotificationsModule, 
         TUI_SANITIZER, 
         TuiButtonModule, 
         TuiErrorModule 
        } from "@taiga-ui/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule } from 'src/app/gallery/gallery.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CookieService } from 'ngx-cookie-service';

import { AuthInterceptor } from './services/auth.interceptor';

import {TuiInputModule, TuiFieldErrorPipeModule } from '@taiga-ui/kit';

declare global {
  interface Window {
    analytics: any;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    // ThirdParty
    TuiInputModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule, 
    TuiButtonModule, 
    TuiFieldErrorPipeModule,
    TuiErrorModule
],
  providers: [
    CookieService, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
      {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
