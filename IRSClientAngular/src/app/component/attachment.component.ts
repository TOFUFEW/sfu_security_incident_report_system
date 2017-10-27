import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AttachmentService } from '../service/attachment.service';
import { Observable } from 'rxjs';
import { DataHelperService } from '../util/data-helper.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'attachment-component',
  templateUrl: '../view/attachment.component.html'
})

export class AttachmentComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor (
    private attachmentService: AttachmentService,
    private http: Http,
    private dataHelper: DataHelperService,
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
              formData.append('file[]', inputEl.files.item(i));
          }
          this.http.post("http://localhost:4567/upload", formData)
              .map(res => res.json())
              .catch(error => Observable.throw(error))
              .subscribe(
                  data => console.log('success'),
                  error => console.log(error)
              )
      }
  }
}
