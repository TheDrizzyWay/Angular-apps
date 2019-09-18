import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyMoviesComponent } from './comedy-movies.component';

describe('ComedyMoviesComponent', () => {
  let component: ComedyMoviesComponent;
  let fixture: ComponentFixture<ComedyMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
