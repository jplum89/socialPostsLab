import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { MyThoughtsComponent } from './social-posts/my-thoughts/my-thoughts.component';
import { NewThoughtComponent } from './social-posts/my-thoughts/new-thought/new-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    MyThoughtsComponent,
    NewThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
