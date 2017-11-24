import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    private headers = new Headers( { 'Content-Type': 'application/json' } );

    doSearch(query: String) {
        
    }
}