import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { check2Guard } from './check2.guard';

describe('check2Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => check2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
