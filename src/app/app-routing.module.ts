import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ShopComponent } from './frontend/shop/shop.component';
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
import { ShopSingleComponent } from './frontend/shop-single/shop-single.component';
import { BlogSingleComponent } from './frontend/blog-single/blog-single.component';
import { SearchProductComponent } from './frontend/search-product/search-product.component';
import { ShowSearchComponent } from './frontend/show-search/show-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog-single/:id', component: BlogSingleComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'shop-single/:id', component: ShopSingleComponent},
  // { path: 'search-product/:name', component: SearchProductComponent},
  { path: 'show-search/:name', component: ShowSearchComponent},
  { path: 'admin', component: AdminComponent,
  children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'product-manager', component: ProductManagerComponent},
    { path: 'product-detail/:id', component: ProductDetailComponent},
    { path: 'product-edit/:id', component: ProductEditComponent},
    { path: 'product-add', component: ProductAddComponent},
    { path: 'news-manager', component: NewsManagerComponent},
    { path: 'news-detail/:id', component: NewsDetailComponent},
    { path: 'news-edit/:id', component: NewsEditComponent},
    { path: 'news-add', component: NewsAddComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
