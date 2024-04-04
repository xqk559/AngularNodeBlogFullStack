import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, catchError, map } from 'rxjs';

import { BlogPost } from './blog-post';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

@Injectable()
export class BlogPostService {
  BlogPostUrl = 'http://localhost:3000/posts';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('BlogPostService');
  }

  /** GET: get BlogPosts from the database */
  getBlogPost(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.BlogPostUrl)
      .pipe(
        catchError(this.handleError('getBlogPost', []))
      );
  }

  /** POST: add a new BlogPost to the database */
  addBlogPost(BlogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.BlogPostUrl + "/addPosts/" + BlogPost.name + "/" + BlogPost.post, BlogPost)
      .pipe(
        catchError(this.handleError('addBlogPost', BlogPost))
      );
  }

  /** DELETE: remove a  BlogPost from the database by id */
  deleteBlogPost(id: number) {
    return this.http.delete(this.BlogPostUrl + "/removePost/" + id)
      .pipe(
        catchError(this.handleError('deleteBlogPost', id))
      );
  }
}