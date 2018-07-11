import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { saveAs } from 'file-saver/FileSaver'
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class NewsletterExportService {

  NewsletterExport_Url: string;
  Newsletter: any;
  content;

  httpOptions = {
    headers: new HttpHeaders({
      //  'Content-Type': 'application/pdf', 
      'Accept': 'application/pdf'
    })
  };

  constructor(private _http: HttpClient, private _configuration: Configuration) {
    this.NewsletterExport_Url = _configuration.Endpoint + 'export/newsletterpdf';
  }

  NewsLetterExport(Newsletter) {
    const req = new HttpRequest('POST', this.NewsletterExport_Url, Newsletter, { responseType: "blob" });
    console.log(req);
    return this._http.request(req).subscribe((data) => {
      this.saveToFileSystem(data);
    });
  }

  export(newsletter) {
    this._http.post(
      'http://localhost:3000/export/newsletterpdf',
      newsletter,
      { headers: this.httpOptions.headers, responseType: "arraybuffer", observe: 'response' }
    ).subscribe((data) => {
      this.saveToFileSystem(data);
    })
  }

  private saveToFileSystem(response) {
    console.log(response);
    const mediaType = 'application/pdf';
    //const contentDispositionHeader: string = response.headers.get();
    //const parts: string[] = contentDispositionHeader.split(';');
    //const filename = parts[1].split('=')[1];
    //console.log(filename);
    const blob = new Blob([response.body], { type: mediaType });
    console.log(response.body);
    saveAs(blob, "MyPdf1");
  }

}
