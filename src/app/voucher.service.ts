import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoucherService {


  API_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  getVouchers() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(this.API_URL + 'vouchers', {headers : headers})
  }

  createVoucher(data:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.API_URL + 'vouchers',data ,{headers : headers})
  }

  deleteVoucher(id:any){
    const baseUrl = this.API_URL + 'vouchers';
    return this.httpClient.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }
}
