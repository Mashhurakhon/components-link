import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignalService } from './services/signal.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { BindingComponent } from './components/binding/binding.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InputStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
    SignalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }import { FormsModule } from '@angular/forms';
import { SIGNAL } from '@angular/core/primitives/signals';
import { InputStateComponent } from './components/input-state/input-state.component';

