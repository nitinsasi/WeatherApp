import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  public dataone:any=[];
  
  errorMsg:string;
  public weatherList:any=[];
   public i:any=0;
   datatwo:any=[];
   datathird:any=[];
   datafour:any=[];

  constructor(private http:HttpClient) { 

  }
  
  
  getWeather(city):Observable<any>{
    
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=71147da53a604db41c63d23cf7d950f5`).pipe(catchError(this.errorHandle))

  }
  errorHandle(error)
  {
    console.log('errorrr',error.message)
    return  throwError(error.message || "Server Errors")
  }
  
}  