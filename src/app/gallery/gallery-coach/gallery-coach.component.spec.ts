import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCoachComponent } from './gallery-coach.component';

describe('GalleryCoachComponent', () => {
  let component: GalleryCoachComponent;
  let fixture: ComponentFixture<GalleryCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
