import { TestBed } from '@angular/core/testing';

import { ResponseManagerService } from './response-manager.service';

describe('ResponseManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseManagerService = TestBed.get(ResponseManagerService);
    expect(service).toBeTruthy();
  });
});
