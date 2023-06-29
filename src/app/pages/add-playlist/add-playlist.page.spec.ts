import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPlaylistPage } from './add-playlist.page';

describe('AddPlaylistPage', () => {
  let component: AddPlaylistPage;
  let fixture: ComponentFixture<AddPlaylistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
