import { TestBed } from '@angular/core/testing';

import { GalleryGuard } from './gallery.guard';

describe('GalleryGuard', () => {
  let guard: GalleryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GalleryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
