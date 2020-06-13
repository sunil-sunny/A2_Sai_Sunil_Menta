import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.css']
})
export class SearchdoctorComponent implements OnInit {

  searchword: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDoctor() {

    this.router.navigate(['doctorpage']);
  }

  onSearch(){
    alert('Search doctor will be perfomed');
  }

}
