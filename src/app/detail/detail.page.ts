import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  title: string;
  imageUrl: string;
  content: string;
  description: string;
  constructor(private route: ActivatedRoute, private newsService: NewsService, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.title = this.newsService.getArticleTitle(this.id);
    this.content = this.newsService.getArticleContent(this.id);
    this.imageUrl = this.newsService.getArticleImageUrl(this.id);
    this.description = this.newsService.getArticleDescription(this.id);
  }

  goBack() {
    this.location.back();
  }

}
