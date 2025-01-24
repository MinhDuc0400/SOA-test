import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BlockComponent } from './block/block.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlockComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    PaginatorModule,
    CarouselModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [HttpClientModule]
})
export class HomeModule { }
