import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLeagueSecondaryComponent } from './featured-league-secondary.component';

describe('FeaturedLeagueSecondaryComponent', () => {
  let component: FeaturedLeagueSecondaryComponent;
  let fixture: ComponentFixture<FeaturedLeagueSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedLeagueSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLeagueSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
