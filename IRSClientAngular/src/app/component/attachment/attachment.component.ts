import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../util/config.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'attachment-component',
  templateUrl: './attachment.component.html'
})

export class AttachmentComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('file') inputEl: ElementRef;
  uploadURI = Config.UploadURI;

  constructor (
    private http: Http,
  ) {

  };

  ngOnInit(): void {

  }

  upload() {
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      let fileCount: number = inputEl.files.length;
      let formData = new FormData();

      if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              console.log (inputEl.files.item(i));
              formData.append('files[]', inputEl.files.item(i));
          }

          var promise = this.http
                  .post( this.uploadURI, formData )
                  .toPromise()
                  .then( response => response.json() as boolean )
                  .catch( this.handleError );
          return Promise.resolve( promise );
      } else {
        console.log("error, no file retrieved")
      }
  }

  private handleError( error: any ) : Promise<any>
  {
      alert( "An error occurred." );
      console.error( 'An error occurred' , error ); // for demo purposes only
      return Promise.reject( error.message || error );
  }
}
