import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CsrmaWebStorageService {

    constructor(private http: HttpClient) { }

    get(key: string) {
        return window.localStorage.getItem(key);
    }

    set(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }

    getRemote() {
        const _id: string = "001";
        return _id;
//        return [{ "_id": "001", "_rev": "1.0", "rev": "1", "filter": "coffee cups"}];
        //        return this.http.get('http://localhost:5984/coffee');
    }

    putRemote(payload: Object) {
        return this.http.put('http://localhost:5984/coffee', payload);
    }

}