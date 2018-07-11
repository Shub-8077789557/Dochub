import { Component, OnInit, ViewChild, Inject,ChangeDetectorRef  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router,NavigationExtras } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeleteNewsletterComponent } from './../delete-newsletter/delete-newsletter.component';
import { DuplicateNewsletterComponent } from '../duplicate-newsletter/duplicate-newsletter.component';
import {NewsletterViewComponent} from '../newsletter-view/newsletter-view.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Element } from './Element';
import { LoginService } from '../../../../../shared_services/login/login.service';
import { NewslistingService } from '../../../../../shared_services/Newslisting/newslisting.service';
import {NewsletterupdateService} from '../../../../../shared_services/Newsletterupdate/newsletterupdate.service';
import { Overlay} from '@angular/cdk/overlay';
@Component({
  selector: 'app-newsletter-data',
  templateUrl: './newsletter-data.component.html',
  styleUrls: ['./newsletter-data.component.scss']
})
export class NewsletterDataComponent implements OnInit {
  _id:string;
  displayedColumns = ['select', 'title', 'createdate', 'createdby', 'action'];
  id;
  ELEMENT_DATA: Element[] = [];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  userid: any;
  list: any;
  NewsLetter;
  Newsletterid;
  User;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private overlay: Overlay, private changeDetectorRefs: ChangeDetectorRef,
    private router: Router, public dialog: MatDialog, public toaster: ToastsManager, private user: LoginService, private newslist: NewslistingService,private update :NewsletterupdateService) {
    
   }
   

  isAllSelected(row) {
    this.Newsletterid = row._id;
    console.log(this.Newsletterid);
    
  }

  ngOnInit() {
    this.Setdata();
    this.dataSource.paginator = this.paginator;
  }

 
  openDialog(row) {
    this.Newsletterid = row._id;
    console.log(this.Newsletterid);
    const dialogRef = this.dialog.open(NewsletterViewComponent, {
      height: 'auto',
      width: 'auto',
      data: { id:this.Newsletterid}
    });

  }

  deleteDialog(row) {
    this.Newsletterid = row._id;
    console.log(this.Newsletterid);
    const dialogRef = this.dialog.open(DeleteNewsletterComponent, {
      height: 'auto',
      width: 'auto',
      data:{ id:this.Newsletterid}
    }).afterClosed().subscribe(result=>{
      this.Setdata()});

  }

  duplicateDialog(row) {
    this.Newsletterid = row._id;
    console.log(this.Newsletterid);
    console.log(row.documentname);
    const dialogRef = this.dialog.open(DuplicateNewsletterComponent, {
      height: 'auto',
      width: 'auto',
      data:{ id:this.Newsletterid,name:row.documentname}
    }).afterClosed().subscribe(result=>{ this.Setdata()});
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


  masterToggle() {
    //this.isAllSelected() ?
    this.selection.clear();
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  Setdata(){
    let response;
    let body;

    const userid = atob(this.user.getUser().user.id).toString();

    const username = this.user.getUser().user.username;
    console.log(userid);
    this.list = {
      userid: userid
    };
    this.newslist.ListingNewsLetter(this.list).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.NewsLetter = body.NewsLetter;
        console.log(this.NewsLetter);
        this.dataSource.data = this.NewsLetter;
        this.changeDetectorRefs.detectChanges();
      }
    );
  }
}




