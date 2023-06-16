import { NgModule } from '@angular/core'
import { EntityDataService } from '@ngrx/data';
import { PostDataService } from './entities/post-data.service';
import { PostService } from '../services/post.service';

@NgModule({
  providers: [PostDataService],
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    postDataService: PostDataService
  ) {
    entityDataService.registerService('Post', postDataService);
  }
}
