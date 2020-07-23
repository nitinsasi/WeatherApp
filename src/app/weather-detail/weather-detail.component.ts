import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {


  public dataone:any=[];
  
  errorMsg:string;
  public weatherList:any=[];
  loading = false;
  cityName:any;
  constructor(private service:WeatherService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.cityName=this.route.snapshot.params['name'];
    console.log('bbbbb',this.cityName)
    this.getData(this.cityName);
  }



  getData(city){
    this.loading = true;
    this.service.getWeather(city).subscribe(data => {
    
      this.dataone =data;
      console.log('aaaaaaa',this.dataone);
      this.loading = false;
    console.log(data)
    },(error) => {
      this.errorMsg=error;
    })
  }

}
