import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private postService: PostService
  ) {
    super('Post', http, httpUrlGenerator);
  }

  override getAll(): Observable<Post[]> {
    return this.postService.getPostsFromAPI();
  }
}
