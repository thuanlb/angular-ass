import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../mockup/News';
import { NewsService } from '../../service/news.service';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  new: News;
  constructor(
    private newsService: NewsService,
    private route:  ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailNews();
  }

  detailNews(){
    this.route.params.subscribe(data => {
      let { id } = data;
      this.newsService.detailNews(id).subscribe(data => this.new = data);
    })
  }

}
