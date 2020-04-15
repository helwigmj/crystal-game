import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// internal imports
import { AppComponent } from './app.component';
import { ArticleSearchPageComponent } from './article-search-page/article-search-page.component';
import { NytArticleSearchService } from './nyt-article-search.service';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleSearchPageComponent,
    ToolBarComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMomentDateModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [NytArticleSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
