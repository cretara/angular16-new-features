import {NgModule} from '@angular/core'
import {DefaultDataServiceFactory, EntityDataService} from '@ngrx/data';
import {PostDataService} from './entities/post-data.service';

@NgModule({
  providers: [PostDataService, EntityDataService, DefaultDataServiceFactory],
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    postDataService: PostDataService
  ) {
    entityDataService.registerService('Post', postDataService);
  }
}
