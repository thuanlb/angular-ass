import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../mockup/News';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
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
