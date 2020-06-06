import { TestBed } from '@angular/core/testing';

import { NgUtilitiesService } from './ng-utilities.service';

describe('NgUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgUtilitiesService = TestBed.get(NgUtilitiesService);
    expect(service).toBeTruthy();
  });
});
