import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PAGE2Page } from './page2.page';

describe('PAGE2Page', () => {
  let component: PAGE2Page;
  let fixture: ComponentFixture<PAGE2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PAGE2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
