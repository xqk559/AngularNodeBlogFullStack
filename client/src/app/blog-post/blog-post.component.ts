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
  postsArray: Array<BlogPost>;

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.getBlogPosts();
    this.getBlogPostsArray();
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPost()
      .subscribe(posts => (this.posts = JSON.stringify(posts)));
  }

  getBlogPostsArray(): void {
    this.blogPostService.getBlogPost()
      .subscribe(postsArray => (this.postsArray = postsArray));
  }
}
