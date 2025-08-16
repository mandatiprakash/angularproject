import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { check1Guard } from './check1.guard';

describe('check1Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => check1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
