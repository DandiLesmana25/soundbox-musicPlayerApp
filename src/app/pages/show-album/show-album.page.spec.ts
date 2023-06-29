import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowAlbumPage } from './show-album.page';

describe('ShowAlbumPage', () => {
  let component: ShowAlbumPage;
  let fixture: ComponentFixture<ShowAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
