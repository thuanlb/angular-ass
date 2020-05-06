import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './backend/admin/admin.component';
import { HomeComponent } from './frontend/home/home.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ShopComponent } from './frontend/shop/shop.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductDetailComponent } from './backend/product-detail/product-detail.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { NewsManagerComponent } from './backend/news-manager/news-manager.component';
import { NewsDetailComponent } from './backend/news-detail/news-detail.component';
import { NewsEditComponent } from './backend/news-edit/news-edit.component';
import { NewsAddComponent } from './backend/news-add/news-add.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { BlogComponent } from './frontend/blog/blog.component';
import { NewsListComponent } from './frontend/news-list/news-list.component';
import { HeaderComponent } from './frontend/header/header.component';
import { ShopSingleComponent } from './frontend/shop-single/shop-single.component';
import { BlogSingleComponent } from './frontend/blog-single/blog-single.component';
import { SearchProductComponent } from './frontend/search-product/search-product.component';
import { ShowSearchComponent } from './frontend/show-search/show-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    ProductManagerComponent,
    ShopComponent,
    ProductListComponent,
    FooterComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    NewsManagerComponent,
    NewsDetailComponent,
    NewsEditComponent,
    NewsAddComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    NewsListComponent,
    HeaderComponent,
    ShopSingleComponent,
    BlogSingleComponent,
    SearchProductComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
