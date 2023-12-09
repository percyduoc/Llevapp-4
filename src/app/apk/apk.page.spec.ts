import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApkPage } from './apk.page';

describe('ApkPage', () => {
  let component: ApkPage;
  let fixture: ComponentFixture<ApkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
