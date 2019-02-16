import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  temp: any;
  constructor(private http: HttpClient) {
    this.getTopNews();
  }

  getTopNews() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cc0b1edd917e4d3ab6fb2c032a412a91';
    this.http.get<any>(url).subscribe(result => {
      console.log('top news initialized');
      console.log(JSON.stringify(result));
      this.temp = result;
    });
  }

  testLog() {
    console.log('logging in child');
    console.log(JSON.stringify(this.temp));
  }
}
