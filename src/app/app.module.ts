import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThermometerModule } from './modules/thermometer/thermometer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ThermometerModule,
        FormsModule //TODO: remove me later
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
