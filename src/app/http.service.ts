import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  numbers = [1,2,3,4];

  constructor(private _http: HttpClient) { }

  shareNumbers(){
    return this.numbers;
  }
  addToNumbers(num){
    this.numbers.push(num);
  }
}
