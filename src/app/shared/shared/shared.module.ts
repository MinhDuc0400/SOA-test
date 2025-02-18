import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from 'src/app/featuremodule/common/header/header.component';
import { FooterComponent } from 'src/app/featuremodule/common/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox/lightbox.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CountUpModule } from 'ngx-countup';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    MatSliderModule,
    NgApexchartsModule,
    MatCardModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    MatFormFieldModule,
    NgxSliderModule,
    CountUpModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    BsDatepickerModule.forRoot(),
    
  ],

  exports: [
    CarouselModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    NgApexchartsModule,
    MatCardModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    LightboxModule,
    MatFormFieldModule,
    NgxSliderModule,
    CountUpModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
    BsDatepickerModule
    
  ],
})
export class SharedModule {}
