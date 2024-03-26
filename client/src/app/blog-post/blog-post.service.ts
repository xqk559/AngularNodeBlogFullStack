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

  /** GET BlogPost from the server */
  getBlogPost(): Observable<BlogPost[]> {
    console.log("function called")
    return this.http.get<BlogPost[]>(this.BlogPostUrl)
      .pipe(
        catchError(this.handleError('getBlogPost', []))
      );
  }

  // /* GET BlogPost whose name contains search term */
  // searchBlogPost(term: string): Observable<BlogPost[]> {
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};

  //   return this.http.get<BlogPost[]>(this.BlogPostUrl, options)
  //     .pipe(
  //       catchError(this.handleError<BlogPost[]>('searchBlogPost', []))
  //     );
  // }

  // // This JSONP example doesn't run. It is for the JSONP documentation only.
  // /** Imaginary API in a different domain that supports JSONP. */
  // BlogPostSearchUrl = 'https://BlogPost.com/search';

  // /** Does whatever is necessary to convert the result from API to BlogPost */
  // jsonpResultToBlogPost(result: any) { return result as BlogPost[]; }

  // /* GET BlogPost (using JSONP) whose name contains search term */
  // searchBlogPostJsonp(term: string): Observable<BlogPost[]> {
  //   term = term.trim();

  //   const BlogPostUrl = `${this.BlogPostSearchUrl}?${term}`;
  //   return this.http.jsonp(BlogPostUrl, 'callback')
  //     .pipe(
  //       map(result => this.jsonpResultToBlogPost(result)),
  //       catchError(this.handleError('searchBlogPost', []))
  //     );
  // }

  // //////// Save methods //////////

  // /** POST: add a new BlogPost to the database */
  // addBlogPost(BlogPost: BlogPost): Observable<BlogPost> {
  //   return this.http.post<BlogPost>(this.BlogPostUrl, BlogPost, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addBlogPost', BlogPost))
  //     );
  // }

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