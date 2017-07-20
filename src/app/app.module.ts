import { HttpModule } from '@angular/http';
import { ConfigService } from './config.service';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => { return () => config.load(); },
      //useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("AppModule constructor");
  }
}

//使用工廠模式注入提前載入參數資料
export function ConfigLoader(config: ConfigService) {
  return () => config.load();
}
