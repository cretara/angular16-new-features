import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { PostEntityService } from 'src/app/model/entities/post-entity.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {

  private postListSubscription: Subscription = new Subscription();

  public postList$: Observable<Post[]> = of([]);

  constructor(private postEntityService: PostEntityService) {}

  postTrackBy(index: number, singlePost: Post): number {
    return singlePost.id;
  }

  ngOnDestroy(): void {
    this.postListSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.postList$ = this.postEntityService.entities$;
    this.postEntityService.clearCache();
    this.postEntityService.getAll();
  }
}
