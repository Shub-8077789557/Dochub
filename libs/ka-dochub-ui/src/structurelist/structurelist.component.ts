import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MAY } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {NavigationExtras} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {StructurelistService} from './../../shared_services/Structurelist/structurelist.service';
import {Structs} from './structure/structure';
import {DeleteStructureComponent} from './structure/delete-structure/delete-structure.component';
import {DuplicateStructureComponent} from './structure/duplicate-structure/duplicate-structure.component';
@Component({
  selector: 'app-structurelist',
  templateUrl: './structurelist.component.html',
  styleUrls: ['./structurelist.component.scss']
})
export class StructurelistComponent implements OnInit {
  _id:string;
  Structureid;
   Structure;
   ELEMENT_DATA : Structs[] =[];
  displayedColumns = [ 'structurename', 'createdate', 'createdby', 'lastmodifiedDate', 'action'];
  dataSource = new MatTableDataSource<Structs>(this.ELEMENT_DATA);
  selection = new SelectionModel<Structs>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private structlist : StructurelistService,private dialog : MatDialog, private changeDetectRef : ChangeDetectorRef) { }

  isAllSelected(row) {
    this.Structureid = row._id;
  }

  masterToggle() {
    //this.isAllSelected() ?
        this.selection.clear() ;
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.StructureData();
    this.dataSource.paginator = this.paginator;
  }

  getid(row)
  {
    this._id= row._id;
    console.log(this._id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
         _id:this._id
      }
  };
   
  }
  openDialog(row) {
    const dialogRef = this.dialog.open(DeleteStructureComponent, {
      height: 'auto',
      width: 'auto',
      data:{ id:row._id}
    }).afterClosed().subscribe(result=>{
      this.StructureData()});
}

openDuplicateDialog(row) {
  const dialogRef = this.dialog.open(DuplicateStructureComponent, {
    height: 'auto',
    width: 'auto',
    data:{ id:row._id}
  }).afterClosed().subscribe(result=>{
    this.StructureData()});
}

  StructureData(){
    let response;
    let body;
    this.structlist.Structurelist().subscribe((data:any)=>(response=data),
   error =>()=>{},
  ()=> {
    body = response.body;
   console.log(body);
   this.Structure = body.Structures;
   console.log(this.Structure);
   this.dataSource.data = this.Structure;
   this.changeDetectRef.detectChanges();
  })
  }

}

