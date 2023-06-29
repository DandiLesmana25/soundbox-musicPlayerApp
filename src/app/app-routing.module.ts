import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full',
  },
  {
    path: 'welcome-page',
    loadChildren: () =>
      import('./welcome-page/welcome-page.module').then(
        (m) => m.WelcomePagePageModule
      ),
  },
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPagePageModule
      ),
  },
  {
    path: 'register-page',
    loadChildren: () =>
      import('./register-page/register-page.module').then(
        (m) => m.RegisterPagePageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'now-playing',
    loadChildren: () =>
      import('./now-playing/now-playing.module').then(
        (m) => m.NowPlayingPageModule
      ),
  },
  {
    path: 'show-playlist',
    loadChildren: () =>
      import('./show-playlist/show-playlist.module').then(
        (m) => m.ShowPlaylistPageModule
      ),
  },
  {
    path: 'add-playlist',
    loadChildren: () =>
      import('./pages/add-playlist/add-playlist.module').then(
        (m) => m.AddPlaylistPageModule
      ),
  },
  {
    path: 'show-album',
    loadChildren: () =>
      import('./pages/show-album/show-album.module').then(
        (m) => m.ShowAlbumPageModule
      ),
  },
  {
    path: 'mood-booster',
    loadChildren: () =>
      import('./pages/mood-booster/mood-booster.module').then(
        (m) => m.MoodBoosterPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
