import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoodBoosterPage } from './mood-booster.page';

describe('MoodBoosterPage', () => {
  let component: MoodBoosterPage;
  let fixture: ComponentFixture<MoodBoosterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoodBoosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
