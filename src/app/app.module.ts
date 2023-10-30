import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeEsCu from '@angular/common/locales/es-CU';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCu);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CU' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
