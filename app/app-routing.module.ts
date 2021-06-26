import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// gọi ra những component
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    // đường dẫn
    path: '',
    component: HomeComponent
  },
  {
    path: 'danh-muc',
    component: CategoryComponent
  },
  {
    path: 'san-pham',
    component: ProductComponent
  },
  {
    path: 'tin-tuc',
    component: PostComponent
  },
  {
    path: 'lien-he.html',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
