import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowPlaylistPage } from './show-playlist.page';

describe('ShowPlaylistPage', () => {
  let component: ShowPlaylistPage;
  let fixture: ComponentFixture<ShowPlaylistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
