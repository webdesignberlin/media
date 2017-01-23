/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaStartComponent } from './media-start.component';

describe('MediaStartComponent', () => {
  let component: MediaStartComponent;
  let fixture: ComponentFixture<MediaStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
