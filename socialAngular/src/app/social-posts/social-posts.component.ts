import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  posts = [{title: 'Dog', body: "blah"}];
  formDisplay: boolean = false;


   showForm = () => {
    this.formDisplay = !this.formDisplay;
}

    onSubmit = (event) => {
        this.posts.unshift(event);
        this.formDisplay = !this.formDisplay;
    }

    onDelete = (event) => {
        const index = this.posts.indexOf(event);
        this.posts.splice(index, 1);
    }
}
