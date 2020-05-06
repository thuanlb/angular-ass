import { Component, OnInit } from '@angular/core';
import { News } from '../../mockup/News';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.scss']
})
export class NewsManagerComponent implements OnInit {
  new: News[];
  page = 1;
  pageSize = 5;
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


  deleteNews(id){
    this.newsService.deleteNews(id).subscribe(response =>{
      this.new = this.new.filter(news => news.id != response.id);
    })
  }


}
