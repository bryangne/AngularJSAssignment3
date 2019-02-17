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
    let title: string;
    try {
      title = this.getArticle(index).title;
    } catch (error) {
      title = 'Error: title not found';
    }
    return title;
  }
  getArticleUrl(index: number): string {
    let url: string;
    try {
      url = this.getArticle(index).url
    } catch (error) {
      url = 'Error: Url not found';
    }
    return url;
  }
  getArticleImageUrl(index: number): string {
    let image: string;
    try {
      image = this.getArticle(index).urlToImage;
    } catch (error) {
      image = './notfound.png';
    }
    return image;
  }
  getArticleContent(index: number): string {
    let content: string;
    try {
      content = this.getArticle(index).content;
    } catch (error) {
      content = 'Error: content not found';
    }
    return content;
  }
  getArticleDescription(index: number): string {
    let description: string;
    try {
      description = this.getArticle(index).description;
    } catch (error) {
      description = 'Error: description not found';
    }
    return description;
  }
}
