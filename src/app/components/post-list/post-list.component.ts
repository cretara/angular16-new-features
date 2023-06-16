import { NgForOf, NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { PostDataService } from 'src/app/model/entities/post-data.service';
import { Post } from "../../model/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {

  public postList: Post[] = [];

  private postListSubscription: Subscription = new Subscription();

  constructor(private postDataService: PostDataService) {

  }

  postTrackBy(index: number, singlePost: Post): number {
    return singlePost.id;
  };

  ngOnDestroy(): void {
    this.postListSubscription.unsubscribe();
  }

  ngOnInit(): void {
      this.postDataService.getAll();
  }

}
