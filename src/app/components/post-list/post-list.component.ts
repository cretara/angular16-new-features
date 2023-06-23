import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostEntityService } from 'src/app/model/entities/post-entity.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [NgIf, NgForOf, AsyncPipe],
  standalone: true,
})
export class PostListComponent implements OnInit {
  public postList: Observable<Post[]> = of([]);

  constructor(private postEntityService: PostEntityService) {}

  postTrackBy(index: number, singlePost: Post): number {
    return singlePost.id;
  }

  ngOnInit(): void {
    this.postList = this.postEntityService.entities$;
    this.postEntityService.getAll();
  }
}
