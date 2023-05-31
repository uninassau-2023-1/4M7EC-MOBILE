import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PAGE3Page } from './page3.page';

describe('PAGE3Page', () => {
  let component: PAGE3Page;
  let fixture: ComponentFixture<PAGE3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PAGE3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
