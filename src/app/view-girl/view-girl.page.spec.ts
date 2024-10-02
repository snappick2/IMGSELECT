import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewGirlPage } from './view-girl.page';

describe('ViewGirlPage', () => {
  let component: ViewGirlPage;
  let fixture: ComponentFixture<ViewGirlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewGirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
