import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PAGE4Page } from './page4.page';

describe('PAGE4Page', () => {
  let component: PAGE4Page;
  let fixture: ComponentFixture<PAGE4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PAGE4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
