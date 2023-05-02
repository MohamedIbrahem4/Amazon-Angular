import { TestBed } from '@angular/core/testing';

import { UserAuthntictionGuard } from './user-authntiction.guard';

describe('UserAuthntictionGuard', () => {
  let guard: UserAuthntictionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthntictionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
