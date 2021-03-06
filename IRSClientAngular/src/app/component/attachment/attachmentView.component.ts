import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../util/config.service';
import {Attachment} from './attachment'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'attachmentView-component',
  templateUrl: './attachmentView.component.html'
})

export class AttachmentViewComponent implements OnInit {
  url : string[];
  @Input('attachment') attachment: Attachment;


  constructor (
    private http: Http
  ) {

  };

  ngOnInit(): void {

  }

  private getFile() {
    var file = this.http.get(
      Config.GetFileURI + this.attachment.attributes.FILE_ID + '/' + this.attachment.attributes.FILE_NAME,
      {responseType: ResponseContentType.ArrayBuffer} )
        .toPromise()
        .then( response => this.getZipFile(response) )
        .catch( this.handleError );
    return Promise.resolve( file );
  };

  private getZipFile(data: any) {


    const blob = new Blob([data['_body']], { type: 'application/zip' });
    console.log(blob);

    const a: any = document.createElement('a');
    document.body.appendChild(a);

    a.style = 'display: none';
    const address = window.URL.createObjectURL(blob);
    a.href = address;
    a.download = this.attachment.attributes.FILE_NAME + ".zip";
    a.click();
    window.URL.revokeObjectURL(address);

  }

  private checkFile(response){
    console.log(response);
    return response
  }


  private handleError( error: any ) : Promise<any>
  {
      alert( "An error occurred." );
      return Promise.reject( error.message || error );
  }
}
