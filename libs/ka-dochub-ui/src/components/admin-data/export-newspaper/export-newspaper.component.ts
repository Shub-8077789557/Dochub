import { Component, ViewChild, OnInit, ElementRef, Input, Renderer, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { NewsletterExportService } from './../../../../shared_services/NewsletterExport/newsletter-export.service';
import { LoginService } from './../../../../shared_services/login/login.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { saveAs } from 'file-saver/FileSaver';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { StructurelistService } from '../../../../shared_services/Structurelist/structurelist.service';
import { Element } from './ExportListing';
import { ExportNewsletterListingService } from './../../../../shared_services/ExportNewsletterListing/export-newsletter-listing.service';
import { parse } from 'url';
import { TemplatelistingService } from './../../../../shared_services/Templatelisting/templatelisting.service';

@Component({
  selector: 'app-export-newspaper',
  templateUrl: './export-newspaper.component.html',
  styleUrls: ['./export-newspaper.component.scss'],
})
export class ExportNewspaperComponent implements OnInit {

  export: any;
  displayedColumns = ['select', 'title'];
  ELEMENT_DATA: Element[] = [];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  newsLetters;
  structures;
  templates;

  selectedNewsLetterId;
  selectedStructure;
  selectedTemplate;

  form4 = new FormGroup({
    structuremarkup: new FormControl(''),
  });

  constructor(private http: HttpClient, private router: Router,
    private structurelist: StructurelistService, private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ExportNewspaperComponent>,
    private login: LoginService, public newsexport: NewsletterExportService,
    private exportlisting: ExportNewsletterListingService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private templatelist: TemplatelistingService) {
  }

  ngOnInit() {
    let response;
    let body;
    this.exportlisting.ExportNewsletterListing().subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.newsLetters = body.Newsletters;
        this.dataSource.data = this.newsLetters;
      })
    this.loadStructureData();
    this.loadTemplateData();
  }

  loadStructureData() {
    let response;
    let body;
    this.structurelist.Structurelist().subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.structures = body.Structures;
        if (this.structures[0]) {
          this.selectedStructure = this.structures[0]
        }
      });
  }

  loadTemplateData() {
    let response;
    let body;
    this.templatelist.Templatelist().subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.templates = body.Templates;
        if (this.templates[0]) {
          this.selectedTemplate = this.templates[0]
        }
      });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  isAllSelected(row) {
    this.selectedNewsLetterId = row._id;
    console.log(this.selectedNewsLetterId);
  }

  masterToggle() {
    //this.isAllSelected() ?
    this.selection.clear();
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * Returns the text from a HTML string
   * 
   * @param {html} String The html string
   */
  stripHtml(html) {
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  }

  exportToPdf() {

    if (this.selectedTemplate._id && this.selectedStructure._id
      && this.selectedNewsLetterId) {

      const userid = this.login.getUser().user.id;
      const username = this.login.getUser().user.username;
      this.export = {
        _templateid: this.selectedTemplate._id,
        _structureid: this.selectedStructure._id,
        _newsletterid: this.selectedNewsLetterId,
        userid: atob(userid).toString(),
        exportedby: atob(username).toString(),
        exportdate: Date.now()
      };
      this.newsexport.export(this.export);
    } else {
      // show validation error
    }
  }
}
