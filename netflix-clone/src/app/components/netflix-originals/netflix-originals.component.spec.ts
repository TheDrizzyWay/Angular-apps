import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixOriginalsComponent } from './netflix-originals.component';

describe('NetflixOriginalsComponent', () => {
  let component: NetflixOriginalsComponent;
  let fixture: ComponentFixture<NetflixOriginalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixOriginalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
