import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../util/config.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'attachment-view',
  templateUrl: './attachmentView.component.html'
})

export class AttachmentViewComponent implements OnInit {
  @ViewChild('filename') displayName: ElementRef;
  @ViewChild('fileLink') displayPath: ElementRef;
  uploadURI = Config.UploadURI;
  attachmentList : String [];

  constructor (
    private http: Http,
  ) {

  };

  getAttachments(): Promise<String[]> {
      var attachments = this.http.get( this.uploadURI )
          .toPromise()
          .then( response => response.json() as String[] )
          .catch( this.handleError );
      return Promise.resolve( attachments );
  };

  private handleError( error: any ) : Promise<any>
  {
      alert( "An error occurred." );
      console.error( 'An error occurred' , error ); // for demo purposes only
      return Promise.reject( error.message || error );
  }

  ngOnInit(): void {
    this.getAttachments().then(
      attachments => {
        this.attachmentList = attachments;
      }
    );
    console.log(this.attachmentList);
  }
}
