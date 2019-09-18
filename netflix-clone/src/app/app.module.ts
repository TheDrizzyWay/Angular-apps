import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/navbar/dropdown/dropdown.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderComponent } from './components/main-content/header/header.component';
import { FooterComponent } from './components/main-content/footer/footer.component';
import { NetflixOriginalsComponent } from './components/netflix-originals/netflix-originals.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ActionMoviesComponent } from './components/action-movies/action-movies.component';
import { ComedyMoviesComponent } from './components/comedy-movies/comedy-movies.component';
import { HorrorMoviesComponent } from './components/horror-movies/horror-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    DropdownComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent,
    NetflixOriginalsComponent,
    TrendingComponent,
    TopRatedComponent,
    ActionMoviesComponent,
    ComedyMoviesComponent,
    HorrorMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
