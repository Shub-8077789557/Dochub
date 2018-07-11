import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MAY } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DeleteTemplateComponent} from './delete-template/delete-template.component';
import {TemplatelistingService} from './../../../shared_services/Templatelisting/templatelisting.service';
import {Temps} from './../templatelist/template'; 
import {DuplicateTemplateComponent} from './duplicate-template/duplicate-template.component';
@Component({
  selector: 'app-templatelist',
  templateUrl: './templatelist.component.html',
  styleUrls: ['./templatelist.component.scss']
})
export class TemplatelistComponent implements OnInit {
  _id:string;
  Templateid;
  Template;
  ELEMENT_DATA : Temps[] =[];
  displayedColumns = ['templatename',  'createdate', 'createdby', 'action'];
  dataSource = new MatTableDataSource<Temps>(this.ELEMENT_DATA);
  selection = new SelectionModel<Temps>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
    
  constructor(public dialog: MatDialog, private templatelist : TemplatelistingService, private changeDetectRef : ChangeDetectorRef) { }

  ngOnInit(){
    this.SetTemplateData();
    this.dataSource.paginator = this.paginator;
  }
  isAllSelected(row) {
    this.Templateid = row._id;
    }

  openDialog(row) {
    const dialogRef = this.dialog.open(DeleteTemplateComponent, {
      height: 'auto',
      width: 'auto',
      data:{ id:row._id}
    }).afterClosed().subscribe(result=>{
      this.SetTemplateData()});
}

openDuplicateDialog(row) {
  const dialogRef = this.dialog.open(DuplicateTemplateComponent, {
    height: 'auto',
    width: 'auto',
    data:{ id:row._id}
  }).afterClosed().subscribe(result=>{
    this.SetTemplateData()});
}

masterToggle() {
  //this.isAllSelected() ?
  this.selection.clear();
  this.dataSource.data.forEach(row => this.selection.select(row));
}
SetTemplateData() {
  let response;
  let body;
  this.templatelist.Templatelist().subscribe((data: any) => (response = data),
  error => () => { },
  () => {
    body = response.body;
    console.log(body);
    this.Template = body.Templates;
    console.log(this.Template);
    this.dataSource.data = this.Template;
    this.changeDetectRef.detectChanges();
}
  )
}
}


