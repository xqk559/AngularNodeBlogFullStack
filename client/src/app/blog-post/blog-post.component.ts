import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './blog-post';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  blogPost: BlogPost;
  postsArray: Array<BlogPost>;
  postForm = new FormGroup({
    nameControl: new FormControl(''),
    postControl: new FormControl('')
  });

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.getBlogPostsArray();
  }

  getBlogPostsArray(): void {
    this.blogPostService.getBlogPost()
      .subscribe(postsArray => (this.postsArray = postsArray));
  }

  onSubmit() {
    var formBlogPost = <BlogPost>{name: this.postForm.value.nameControl, post: this.postForm.value.postControl};
    this.blogPostService.addBlogPost(this.blogPost = formBlogPost)
      .subscribe();
    location.reload();
  }

  onDelete(id: number) {
    this.blogPostService.deleteBlogPost(id)
      .subscribe();
    location.reload();
  }
}
