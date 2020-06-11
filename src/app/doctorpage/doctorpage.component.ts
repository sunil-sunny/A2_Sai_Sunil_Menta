import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorpage',
  templateUrl: './doctorpage.component.html',
  styleUrls: ['./doctorpage.component.css']
})
export class DoctorpageComponent implements OnInit {

  tiles: any[] = [
    {text: 'image', cols: 1, rows: 2.5, color: 'lightblue'},
    {text: 'Name', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Specialist', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Description', cols: 2.5, rows: 2, color: 'lightgreen'},
    {text: 'Review', cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'click button', cols: 1, rows: 2, color: '#DDBDF1'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
