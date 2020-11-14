import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeaguesComponent } from './layout-leagues.component';

describe('LayoutLeaguesComponent', () => {
  let component: LayoutLeaguesComponent;
  let fixture: ComponentFixture<LayoutLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLeaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
