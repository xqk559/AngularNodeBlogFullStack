import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularNodeBlog';
  displayPostsBoolean = false;

  displayPosts(): void {
    this.displayPostsBoolean = !this.displayPostsBoolean;
    console.log("clicked")
  }
}
