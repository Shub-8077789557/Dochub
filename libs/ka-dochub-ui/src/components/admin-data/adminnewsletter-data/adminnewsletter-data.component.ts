import { Component, OnInit, ViewChild, Inject,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Element } from './../../create-newsletter/components/newsletter-data/Element';
import {ExportNewspaperComponent} from './../export-newspaper/export-newspaper.component';
import {AdminnewsletterViewComponent} from './../adminnewsletter-view/adminnewsletter-view.component';
import { AdminNewsletterdataService} from './../../../../shared_services/AdminNewsletterdata/admin-newsletterdata.service';
@Component({
  selector: 'app-adminnewsletter-data',
  templateUrl: './adminnewsletter-data.component.html',
  styleUrls: ['./adminnewsletter-data.component.scss']
})
export class AdminnewsletterDataComponent implements OnInit {
  Newsletterid;
  NewsLetter;
  ELEMENT_DATA: Element[] = [];
  displayedColumns = ['select', 'title', 'createdate', 'createdby', 'action'];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef, private  adminlist : AdminNewsletterdataService) { }

  isAllSelected(row) {
    this.Newsletterid = row._id;
    console.log(this.Newsletterid);
  }

  openDialog(row) {
    this.Newsletterid = row._id;
   const dialogRef = this.dialog.open(ExportNewspaperComponent, {
      height: 'auto',
      width: 'auto',
      data:{ id:this.Newsletterid}
    });
  }

  ViewDialog(row) {
    this.Newsletterid = row._id;
    const dialogRef = this.dialog.open(AdminnewsletterViewComponent, {
       height: 'auto',
       width: 'auto',
       data:{ id:this.Newsletterid}
     });
   }

  masterToggle() {
    //this.isAllSelected() ?
        this.selection.clear();
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    let response;
    let body;
    this.adminlist.AdminNewsLetterData().subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.NewsLetter = body.Newsletters;
        console.log(this.NewsLetter);
        this.dataSource.data = this.NewsLetter;
    }
  )
  this.dataSource.paginator = this.paginator;}
  
}



  

