import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LjPage } from './lj.page';

describe('LjPage', () => {
  let component: LjPage;
  let fixture: ComponentFixture<LjPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
