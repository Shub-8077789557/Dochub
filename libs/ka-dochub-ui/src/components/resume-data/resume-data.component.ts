import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.scss']
})
export class ResumeDataComponent implements OnInit {
  displayedColumns = ['select', 'Employee', 'EmailId', 'Designation', 'Department', 'Skills', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  constructor() { }

  ngOnInit() {
    
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  Employee: string;
  EmailId: string;
  Designation: string;
  Department: string;
  Skills:string;
}
const ELEMENT_DATA: Element[] = [
  {Employee:'Sadik Koliya',EmailId:'sadikkoliya@knowarth.com',Department:'UI Department',Designation:'Intern',Skills:'UI Department/FullStack Developer'},
  {Employee:'Anand Maheshwari',EmailId:'anandmaheshwari@knowarth.com',Department:'UI Department',Designation:'Intern',Skills:'UI Department/FullStack Developer'},
  {Employee:'Harsh Rana',EmailId:'harshrana@knowarth.com',Department:'UI Department',Designation:'Intern',Skills:'UI Department/FullStack Developer'},
  {Employee:'Varshil Doshi',EmailId:'varshildoshi@knowarth.com',Department:'UI Department',Designation:'Intern',Skills:'UI Department/FullStack Developer'},  
  {Employee:'Rinku Gohel',EmailId:'rinkugohel@knowarth.com',Department:'UI Department',Designation:'Intern',Skills:'UI Department/FullStack Developer'} 

  
];

