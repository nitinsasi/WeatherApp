import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DataListComponent } from './data-list/data-list.component';
import { WeatherService } from './Services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule,MatTableModule,MatCardModule,
  MatFormFieldModule,MatInputModule,MatSelectModule,
  MatToolbarModule,MatDialogModule,
  MatListModule,MatPaginatorModule,MatSortModule,MatIconModule,MatProgressSpinnerModule ,MatGridListModule} from '@angular/material';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DataListComponent,
    WeatherDetailComponent,
    DialogComponent,
    
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,
    ReactiveFormsModule,MatButtonModule,MatTableModule,ReactiveFormsModule,MatCardModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule,MatToolbarModule,
    MatDialogModule,MatListModule,
    MatPaginatorModule,MatSortModule,MatIconModule,MatGridListModule,MatProgressSpinnerModule
  ],
 
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
