import { Component, OnInit } from '@angular/core';
import { News } from '../../mockup/News';
import { NewsService } from '../../service/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {

  new: News = new News();

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addNews(){
    this.newsService.addNews(this.new).subscribe(data => this.router.navigateByUrl('/admin/news-manager'));
  }

}
