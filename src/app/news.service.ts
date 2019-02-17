import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsObject } from './news.model';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsArticles: Array<NewsObject>;

  constructor(private http: HttpClient) {
    this.newsArticles = new Array<NewsObject>();
  }

  getTopNews() {
    let newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cc0b1edd917e4d3ab6fb2c032a412a91';
    this.http.get<any>(newsUrl).subscribe(result => {
      // console.log('top news initialized');
      // console.log(JSON.stringify(result));
      for(var i = 0; i < result.totalResults; i++) {
        try {
          let title = result.articles[i].title;
          let url = result.articles[i].url;
          let urlToImage = result.articles[i].urlToImage;
          let description = result.articles[i].description;
          let content = result.articles[i].content;
          this.newsArticles.push(new NewsObject(title, url, urlToImage, description, content));
        } catch (error) {
          console.log(error);
        }
        // make sure the content can be displayed
      }
      // console.log(JSON.stringify(this.newsArticles));
    },
    error => {
      console.log(error);
    });
  }
  getArticle(index: number): NewsObject {
    return this.newsArticles[index];
  }
  getArticleTitle(index: number): string {
    return this.getArticle(index).title;
  }
  getArticleUrl(index: number): string {
    return this.getArticle(index).url;
  }
  getArticleImageUrl(index: number): string {
    return this.getArticle(index).urlToImage;
  }
  getArticleContent(index: number): string {
    return this.getArticle(index).content;
  }
}
