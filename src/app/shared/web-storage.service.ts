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
    }

    putRemote(payload: Object) {
        return this.http.put('http://localhost:5984/coffee', payload);
    }

}