import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoaComponent } from './soa.component';
import { SoaRoutingModule } from './soa-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SoaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule, SoaRoutingModule,
  ],
  providers: [HttpClientModule]
})
export class SoaModule { }
