import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMoviesComponent } from './action-movies.component';

describe('ActionMoviesComponent', () => {
  let component: ActionMoviesComponent;
  let fixture: ComponentFixture<ActionMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
