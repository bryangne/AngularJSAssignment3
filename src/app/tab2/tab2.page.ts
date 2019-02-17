import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  titles: string[] = [];

  constructor(private newsService: NewsService) {
    // this.newsService = newsService;
    // this.newsService.getTopNews();
    // this.titles = [];
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.newsService.getTopNews();
    for(let i = 0; i < 10; i++) {
      this.titles.push(this.newsService.getArticleTitle(i));
    }
  }
}
