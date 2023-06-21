import { TestBed } from '@angular/core/testing';

import { PostEntityService } from './post-entity.service';

describe('PostDataService', () => {
  let service: PostEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
