import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiviajePage } from './miviaje.page';

describe('MiviajePage', () => {
  let component: MiviajePage;
  let fixture: ComponentFixture<MiviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
