import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../util/config.service';
import {Attachment} from './attachment'
import { NewReportService } from '../../service/new-report.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'attachment-component',
  templateUrl: './attachment.component.html'
})

export class AttachmentComponent implements OnInit {
  @ViewChild('file') inputEl: ElementRef;
  uploadURI = Config.UploadURI;
  newAttachment: Attachment;

  constructor (
    private http: Http,
    private reportService: NewReportService
  ) {
    this.newAttachment = new Attachment();

  };

  ngOnInit(): void {

  }

  public upload(): Promise<boolean> {
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      let fileCount: number = inputEl.files.length;
      let formData = new FormData();

      if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              console.log (inputEl.files.item(i));
              formData.append('files[]', inputEl.files.item(i));
          }
          var directory = this.generateUUID();
          var success = this.http.post( this.uploadURI + "/" + directory, formData )
              .toPromise()
              .then( response => response.json() as boolean )
              .catch( this.handleError );

          if (success) {
            this.initAttachment( inputEl.files.item(0).name );
          }

          return Promise.resolve( success );
      } else {
        console.log("error, no file retrieved")
      }
  }

  private initAttachment(path: string): void{
      this.newAttachment.attributes.FILE_NAME = path;
      this.addAttachmentToReport();
  }

  private addAttachmentToReport(): void {
    this.reportService.addIncidentElement(this.newAttachment);
  }

  private generateUUID () { // Public Domain/MIT
    var d = Date.now();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  private handleError( error: any ) : Promise<any>
  {
      alert( "An error occurred." );
      return Promise.reject( error.message || error );
  }
}
