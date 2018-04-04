import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'Egiantsdetails',
  styleUrls: ['Egiantsdetails.component.css'],
  templateUrl: 'Egiantsdetails.component.html',
})
export class EgiantsdetailsComponent {
  displayedColumns = ['position', 'name', 'age', 'role'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  age: number;
  role: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'John', age: 22, role: 'Developer'},
  {position: 2, name: 'Steve', age: 28, role: 'Manager'},
  {position: 3, name: 'Maggi', age: 35, role: 'Team Lead'},
  {position: 4, name: 'Ben', age: 36, role: 'Tester'},
  {position: 5, name: 'Boron', age:23, role: 'Tester'},
  {position: 6, name: 'Carry', age: 42, role: 'Manager'},
];





/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egiantsdetails',
  templateUrl: './egiantsdetails.component.html',
  styleUrls: ['./egiantsdetails.component.css']
})
export class EgiantsdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
