import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, catchError, map } from 'rxjs';

import { BlogPost } from './blog-post';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class BlogPostService {
  BlogPostUrl = 'http://localhost:3000/posts';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('BlogPostService');
  }

  getBlogPost(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.BlogPostUrl)
      .pipe(
        catchError(this.handleError('getBlogPost', []))
      );
  }

  /** POST: add a new BlogPost to the database */
  addBlogPost(BlogPost: BlogPost): Observable<BlogPost> {
    console.log(BlogPost);
    return this.http.post<BlogPost>(this.BlogPostUrl, BlogPost, httpOptions)
      .pipe(
        catchError(this.handleError('addBlogPost', BlogPost))
      );
  }

  // /** DELETE: delete the BlogPost from the server */
  // deleteBlogPost(id: number): Observable<unknown> {
  //   const url = `${this.BlogPostUrl}/${id}`; // DELETE api/BlogPost/42
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deleteBlogPost'))
  //     );
  // }

  // /** PUT: update the BlogPost on the server. Returns the updated BlogPost upon success. */
  // updateBlogPost(BlogPost: BlogPost): Observable<BlogPost> {
  //   httpOptions.headers =
  //     httpOptions.headers.set('Authorization', 'my-new-auth-token');

  //   return this.http.put<BlogPost>(this.BlogPostUrl, BlogPost, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('updateBlogPost', BlogPost))
  //     );
  // }
}