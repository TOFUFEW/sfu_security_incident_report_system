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
  attachments: Attachment[];
  newAttachment: Attachment;

  constructor (
    private http: Http,
    private reportService: NewReportService
  ) {

  };

  ngOnInit(): void {
    this.newAttachment = new Attachment();
    this.getAttachments().then ( returnedAttachments => {
      this.attachments = returnedAttachments;
      console.log(this.attachments);
    });

    //create a unique identifier for internal use so filenames do not have to be unique
    this.newAttachment.attributes.FILE_ID = this.generateUUID();
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

          var success = this.http.post( this.uploadURI + "/" + this.newAttachment.attributes.FILE_ID, formData )
              .toPromise()
              .then( response => response.json() as boolean )
              .catch( this.handleError );

          if (success) {
            this.initAttachment( inputEl.files.item(0).name  );
          }

          return Promise.resolve( success );
      } else {
        console.log("error, no file retrieved")
      }
  }

  private initAttachment(filename: string): void{
      this.newAttachment.attributes.FILE_NAME = filename;
      console.log("initAttachment");
      console.log(this.newAttachment.attributes.FILE_NAME);
      this.addAttachmentToReport();
  }

  private addAttachmentToReport(): void {
    console.log("addAttachmentToReport");
    this.reportService.addIncidentElement(this.newAttachment);
  }

  getAttachments(): Promise<Attachment[]> {
      var returnedAttachments = this.http.get( Config.UploadsURI )
          .toPromise()
          .then( response => response.json() as Attachment[] )
          .catch( this.handleError );
      return Promise.resolve( returnedAttachments );
  };

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
