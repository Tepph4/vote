import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit{

  constructor( private http:HttpClient) {}

  
  results: any=[];
  


  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.http.get<any>('http://localhost:3000/user/testGet').subscribe(data => {
      this.results = data;
    })

  }

  deleteUser(id:any) {
    this.http.delete('http://localhost:3000/user/deleteUser/'+id).subscribe(data => {
      alert("ลบข้อมูลเรียบร้อย");
      this.refreshData();
    })
  }

}
