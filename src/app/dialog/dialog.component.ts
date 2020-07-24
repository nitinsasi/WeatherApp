import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  
  errorMsg:string;
  
  dataone:any;

  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private service:WeatherService
 ) {
  
 

  }
 
 ngOnInit() {
 

let city=this.data
   this.service.getWeather(city).subscribe(data => {
  
    this.dataone = data;
    
        console.log('testingdialog',this.dataone);
        this.loading = false;
      console.log(data)
      },(error) => {
        this.errorMsg=error;
      })
    }
 }



