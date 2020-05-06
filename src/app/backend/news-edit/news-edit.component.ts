import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News } from '../../mockup/News';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {
  new : News;
  constructor(
    private newsService: NewsService,
    private route:  ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEditNews();
  }
  getEditNews(){
    this.route.params.subscribe(data => {
      let { id } = data;
      this.newsService.getEditNews(id).subscribe(data => this.new = data);
    })
  }
  updateNews(){
    this.newsService.updateNews(this.new).subscribe(() =>
    this.router.navigateByUrl('/admin/news-manager'));
  }



}
