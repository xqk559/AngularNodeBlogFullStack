import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './blog-post';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  posts: string;

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPost()
      .subscribe(posts => (this.posts = JSON.stringify(posts)));
  }
  //req = http.get<Heroes>('/api/heroes');
  
  // configUrl = 'assets/config.json';

  // getConfig() {
  //   return this.http.get<Config>(this.configUrl);
  // }
}
