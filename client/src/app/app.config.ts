import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpErrorHandler } from '../app/http-error-handler.service';
import { MessageService } from '../app/message.service';
import { BlogPostService } from './blog-post/blog-post.service';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule),
    MessageService,
    HttpErrorHandler,
    BlogPostService
  ]
};
