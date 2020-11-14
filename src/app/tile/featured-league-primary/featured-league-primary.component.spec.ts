import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLeaguePrimaryComponent } from './featured-league-primary.component';

describe('FeaturedLeaguePrimaryComponent', () => {
  let component: FeaturedLeaguePrimaryComponent;
  let fixture: ComponentFixture<FeaturedLeaguePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedLeaguePrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLeaguePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
