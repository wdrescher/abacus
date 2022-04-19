import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryJoinTeamComponent } from './gallery-join-team.component';

describe('GalleryJoinTeamComponent', () => {
  let component: GalleryJoinTeamComponent;
  let fixture: ComponentFixture<GalleryJoinTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryJoinTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryJoinTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
