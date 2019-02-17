import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsObject } from '../news.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  newsService: NewsService;
  constructor(newsService: NewsService) {
    this.newsService = newsService;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
