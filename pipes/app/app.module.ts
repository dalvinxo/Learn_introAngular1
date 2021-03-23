import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ReversoPipe } from './pipes/reverso.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, CapitalizePipe, ReversoPipe],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
