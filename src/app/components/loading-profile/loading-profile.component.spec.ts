import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingProfileComponent } from './loading-profile.component';

describe('LoadingProfileComponent', () => {
  let component: LoadingProfileComponent;
  let fixture: ComponentFixture<LoadingProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingProfileComponent]
    });
    fixture = TestBed.createComponent(LoadingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
