import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedformsComponent } from './verifiedforms.component';

describe('VerifiedformsComponent', () => {
  let component: VerifiedformsComponent;
  let fixture: ComponentFixture<VerifiedformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedformsComponent]
    });
    fixture = TestBed.createComponent(VerifiedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
