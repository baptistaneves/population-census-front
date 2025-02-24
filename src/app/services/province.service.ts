import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { BaseService } from './base.service';
import { Province } from '../models/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends BaseService {

  constructor(private http: HttpClient) { super();  }

  getAll() : Observable<any>{
    return this.http
          .get<any>(this.UrlServiceV1 + "province/get-all", this.GetAuthHeaderJson())
          .pipe(catchError(super.serviceError));
  }

  add(province: Province) : Observable<any>{
    let response = this.http
        .post<Province>(this.UrlServiceV1 + "province/create", province, this.GetHeaderFormData())
        .pipe((
          map(this.extractData),
          catchError(this.serviceError)));

    return response;
  }

  update(province: Province) : Observable<any>{
    let response = this.http
        .put<Province>(this.UrlServiceV1 + "province/update", province, this.GetHeaderFormData())
        .pipe((
          map(this.extractData),
          catchError(this.serviceError)));

    return response;
  }

  remove(id:string) : Observable<any>{
    return this.http
      .delete<any>(this.UrlServiceV1 + "province/remove/" + id, this.GetAuthHeaderJson())
      .pipe(catchError(super.serviceError));
  }

}
