import { TestBed } from '@angular/core/testing';

import { SteamIshService } from './steam-ish.service';

describe('SteamIshService', () => {
  let service: SteamIshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamIshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
