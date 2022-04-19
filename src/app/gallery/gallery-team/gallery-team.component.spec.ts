import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeamComponent } from './gallery-team.component';

describe('GalleryTeamComponent', () => {
  let component: GalleryTeamComponent;
  let fixture: ComponentFixture<GalleryTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
