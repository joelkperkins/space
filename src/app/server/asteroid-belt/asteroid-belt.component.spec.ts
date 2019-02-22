import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidBeltComponent } from './asteroid-belt.component';

describe('AsteroidBeltComponent', () => {
  let component: AsteroidBeltComponent;
  let fixture: ComponentFixture<AsteroidBeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidBeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
