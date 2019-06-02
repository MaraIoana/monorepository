import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingErrorComponent } from './routing-error/routing-error.component';

@NgModule({
  declarations: [
    RoutingErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RoutingErrorComponent
  ]
})
export class ErrorModule { }
