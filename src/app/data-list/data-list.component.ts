import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { Router } from '@angular/router';
import {MatDialog,  MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {


  errorMsg:string;
  weatherList;
  i;
   data2;
   data3;
  data4;
  data1;
  loading = false;
  
  constructor(private _weather:WeatherService,private router:Router) { }

  ngOnInit() {
   this.data1= this._weather.dataone;
   this.data2= this._weather.datatwo;
   this.data3= this._weather.datathird;
  this.data4= this._weather.datafour;
  this.i=this._weather.i;
  }
  sendData(city){
    this.loading = true;
    this._weather.getWeather(city).subscribe(data => {
     if(this.i==0)
     {
this.data1 = data;
this.i=this.i+1
     }
     else if(this.i==1)
     {
this.data2=data;
this.i=this.i+1
     }
     else if(this.i==2)
     {
this.data4=data;
this.i=this.i+1
     }
     else{
this.data3=data;
this.i=this.i-3
     }
      //this.weatherList=data
      //this.data2=JSON.stringify(data) 
      this.data1 =data;
      console.log('testingt',this.data1);
      this.loading = false;
    console.log(data)
    },(error) => {
      this.errorMsg=error;
    })
  }


  passData(name){
    console.log(name)
this.router.navigate(['/viewDetail/'+name])


  }



  public cities = [  
    {id:1, name: 'Adilabad'},
		{id:2, name:	'Anantapur'},
		{id:3, name:	'Chittoor'},
		{id:4, name:	'Kakinada'},
		{id:5, name:	'Guntur'},
		{id:6, name:	'Hyderabad'},
		{id:7, name:	'Karimnagar'},
    {id:8, name:'Khammam'},
    {id:9, name:'Krishna'},
		{id:10, name:	'Kurnool'},
		{id:11, name:	'Mahbubnagar'},
    {id:12, name:'Medak'},
    {id:13, name:'Nalgonda'},
		{id:14, name:	'Nizamabad'},
		{id:15, name:	'Ongole'},
    {id:16, name:'Hyderabad'},
    {id:17, name:'Srikakulam'},
    {id:18, name:'Nellore'},
    {id:19, name:'Visakhapatnam'},
    {id:20, name:'Vizianagaram'},
		{id:21, name:	'Warangal'},
    {id:22, name:'Eluru'},
    {id:23, name:'Kadapa'},




    {id:24, name: 'Anjaw'},
    {id:25, name:'Changlang'},
    {id:26, name:'East Siang'},
    {id:27, name:'Kurung Kumey'},
    {id:28, name:'Lohit'},
    {id:29, name:'Lower Dibang Valley'},
    {id:30, name:'Lower Subansiri'},
    {id:31, name: 'Papum Pare'},
    {id:32, name:'Tawang'},
    {id:33, name:'Tirap'},
    {id:34, name:'Dibang Valley'},
    {id:35, name:'Upper Siang'},
    {id:36, name:'Upper Subansiri'},
    {id:37, name:'West Kameng'},
    {id:38, name:'West Siang'},

    {id:39, name:'Baksa'},
    {id:40, name:'Barpeta'},
    {id:41, name:'Bongaigaon'},
    {id:42, name:'Cachar'},
    {id:43, name:'Chirang'},
    {id:44, name: 'Darrang'},
    {id:45, name:'Dhemaji'},
    {id:46, name: 'Dima Hasao'},
    {id:47, name:'Dhubri'},
    {id:48, name:'Dibrugarh'},
    {id:49, name:'Goalpara'},
    {id:50, name:'Golaghat'},
    {id:51, name:'Hailakandi'},
    {id:52, name:'Jorhat'},
    {id:53, name:'Kamrup'},
    {id:54, name:'Kamrup Metropolitan'},
    {id:55, name:'Karbi Anglong'},
    {id:56, name:'Karimganj'},
    {id:57, name:'Kokrajhar'},
    {id:58, name:'Lakhimpur'},
    {id:59, name:'Marigaon'},
    {id:60, name:'Nagaon'},
    {id:61, name:'Nalbari'},
    {id:62, name:'Sibsagar'},
    {id:63, name:'Sonitpur'},
    {id:64, name:'Tinsukia'},
    {id:65, name:'Udalguri'},

    {id:66, name:'Araria'},
    {id:67, name:'Arwal'},
    {id:68, name:'Aurangabad'},
    {id:69, name:'Banka'},
    {id:70, name: 'Begusarai'},
    {id:71, name:'Bhagalpur'},
    {id:72, name: 'Bhojpur'},
    {id:73, name: 'Buxar'},
    {id:74, name: 'Darbhanga'},
    {id:75, name: 'East Champaran'},
    {id:76, name:'Gaya'},
    {id:77, name:'Gopalganj'},
    {id:78, name:'Jamui'},
    {id:79, name:'Jehanabad'},
    {id:80, name:'Kaimur'},
    {id:81, name:'Katihar'},
    {id:82, name:'Khagaria'},
    {id:83, name: 'Kishanganj'},
    {id:84, name:'Lakhisarai'},
    {id:85, name:'Madhepura'},
    {id:86, name:'Madhubani'},
    {id:87, name:'Munger'},
    {id:88, name:'Muzaffarpur'},
    {id:89, name:'Nalanda'},
    {id:90, name: 'Nawada'},
    {id:91, name: 'Patna'},
    {id:92, name:'Purnia'},
    {id:93, name:'Rohtas'},
    {id:94, name: 'Saharsa'},
    {id:95, name:'Samastipur'},
    {id:96, name:'Saran'},
    {id:97, name:'Sheikhpura'},
    {id:98, name:'Sheohar'},
    {id:99, name:'Sitamarhi'},
    {id:100, name:'Siwan'},
    {id:101, name:'Supaul'},
    {id:102, name:'Vaishali'},
    {id:103, name:'West Champaran'},
    {id:104, name:'Chandigarh'},

    

    // {id:104, name:'Bagalkot',
    // {id:104, name:'Bangalore Rural',
    // {id:104, name: 'Bangalore Urban',
    // {id:104, name:'Belgaum',
    // {id:104, name:'Bellary',
    // {id:104, name:'Bidar',
    // {id:104, name:'Bijapur',
    // 'Chamarajnagar',
    // 'Chikkamagaluru',
    // 'Chikkaballapur',
    // 'Chitradurga',
    // 'Davanagere',
    // 'Dharwad',
    // 'Dakshina Kannada',
    // 'Gadag',
    // 'Gulbarga',
    // 'Hassan',
    // 'Haveri district',
    // 'Kodagu',
    // 'Kolar',
    // 'Koppal',
    // 'Mandya',
    // 'Mysore',
    // 'Raichur',
    // 'Shimoga',
    // 'Tumkur',
    // 'Udupi',
    // 'Uttara Kannada',
    // 'Ramanagara',
    // 'Yadgir',

    // 'Alappuzha',
    // 'Ernakulam',
    // 'Idukki',
    // 'Kannur',
    // 'Kasaragod',
    // 'Kollam',
    // 'Kottayam',
    // 'Kozhikode',
    // 'Malappuram',
    // 'Palakkad',
    // 'Pathanamthitta',
    // 'Thrissur',
    // 'Thiruvananthapuram',
    // 'Wayanad',

    // 'Alirajpur',
    // 'Anuppur',
    // 'Ashok Nagar',
    // 'Balaghat',
    // 'Barwani',
    // 'Betul',
    // 'Bhind',
    // 'Bhopal',
    // 'Burhanpur',
    // 'Chhatarpur',
    // 'Chhindwara',
    // 'Damoh',
    // 'Datia',
    // 'Dewas',
    // 'Dhar',
    // 'Dindori',
    // 'Guna',
    // 'Gwalior',
    // 'Harda',
    // 'Hoshangabad',
    // 'Indore',
    // 'Jabalpur',
    // 'Jhabua',
    // 'Katni',
    // 'Khandwa (East Nimar)',
    // 'Khargone (West Nimar)',
    // 'Mandla',
    // 'Mandsaur',
    // 'Morena',
    // 'Narsinghpur',
    // 'Neemuch',
    // 'Panna',
    // 'Rewa',
    // 'Rajgarh',
    // 'Ratlam',
    // 'Raisen',
    // 'Sagar',
    // 'Satna',
    // 'Sehore',
    // 'Seoni',
    // 'Shahdol',
    // 'Shajapur',
    // 'Sheopur',
    // 'Shivpuri',
    // 'Sidhi',
    // 'Singrauli',
    // 'Tikamgarh',
    // 'Ujjain',
    // 'Umaria',
    // 'Vidisha',

    ]; 
}
