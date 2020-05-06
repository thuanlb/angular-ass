import { Component, OnInit } from '@angular/core';
import { News } from '../../mockup/News';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  new: News[];
  page = 1;
  pageSize = 6;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews(){
    this.newsService.getNews().subscribe(response => {
      this.new = response;
    }, error => {
    });
  }

}
