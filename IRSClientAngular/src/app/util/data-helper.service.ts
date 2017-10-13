import { Injectable } from '@angular/core';
import { Incident } from '../model/incident';
import { StorageObject } from '../model/storage-object';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataHelperService
{
    constructor() {}

    extractAttribute( storageObject: StorageObject ): Object {
        return storageObject.attributes;
    }

    extractAttributes( storageObjects: StorageObject[] ): Object[] {
        var arr = [];
        storageObjects.forEach( so => {
            arr.push( so.attributes );
        });
        return arr;
    }

    toStorageObject( table: string, object: Object): StorageObject {
        var storageObject: StorageObject = new StorageObject();
     
        storageObject.table = table;
        storageObject.attributes = object;
        return storageObject;
    }


}
