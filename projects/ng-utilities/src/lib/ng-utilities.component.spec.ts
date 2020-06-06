import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUtilitiesComponent } from './ng-utilities.component';

describe('NgUtilitiesComponent', () => {
  let component: NgUtilitiesComponent;
  let fixture: ComponentFixture<NgUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
