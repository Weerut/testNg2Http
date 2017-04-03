import { Component } from '@angular/core';
import { Observable } from "RxJS/Rx";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'app works!';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private dstUrl = 'http://localhost:50113/';
  private textValue = "Hello"
  constructor(private http: Http) { }

  onGet(): void {
    this.textValue = "Get";
    this.getData().then((result: string) => {
      this.textValue = result;
    });
  }

  onPost(): void {
    this.textValue = "Post";
    this.postData().then((result: string) => {
      this.textValue = result;
    });
  }
  onPut(): void {
    this.textValue = "Put";
    this.putData().then((result: string) => {
      this.textValue = result;
    });
  }
  onDelete(): void {
    this.textValue = "Delete";
    this.deleteData().then((result: string) => {
      this.textValue = result;
    });
  }

  getData(): Promise<string> {
    return this.http.get(this.dstUrl)
      .toPromise()
      .then(this.processData)
      .catch(this.handleError);
  }

  postData(): Promise<string> {
    return this.http.post(this.dstUrl, { headers: this.headers })
      .toPromise()
      .then(this.processData)
      .catch(this.handleError);
  }
  putData(): Promise<string> {
    return this.http.put(this.dstUrl, { headers: this.headers })
      .toPromise()
      .then(this.processData)
      .catch(this.handleError);
  }
  deleteData(): Promise<string> {
    return this.http.delete(this.dstUrl)
      .toPromise()
      .then(this.processData)
      .catch(this.handleError);
  }

  private processData(response): Promise<string> {
    // return Promise.resolve(response);
    return response.json() ;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
