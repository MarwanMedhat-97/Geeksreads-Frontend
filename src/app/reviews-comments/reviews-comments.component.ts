import { Component, OnInit } from '@angular/core';
import { CommentsDetails } from './reviews-comments.model';
import { Subscription } from 'rxjs';
import { CommentsDetails_Service } from './reviews-comments.service';
import { delay } from 'q';
@Component({
  selector: 'app-reviews-comments',
  templateUrl: './reviews-comments.component.html',
  styleUrls: ['./reviews-comments.component.css']
})
export class ReviewsCommentsComponent implements OnInit {
str: string;
userimage: string [] = [];
username: string [] = [];
userid: string [] = [];
userbody: string [] = [];
userdate: string [] = [];
LikesCount: string [] = [];
Photo: string [] = [];
ReviewId: string [] = [];
CommentId: string [] = [];
private Sub_profile: Subscription;
public comment_details: CommentsDetails[] = [];
constructor(public comments_service: CommentsDetails_Service) { }
  ngOnInit() {
    this.comments_service.get_comments_Info();                                  // to get the user info from the service
    // tslint:disable-next-line:variable-name
    this.Sub_profile = this.comments_service.get_comments_Info_updated().subscribe((comments_Information: CommentsDetails[]) => {
      this.comment_details = comments_Information;
      this.SetElements();
      console.log(this.comment_details);
    });
  }
  SetElements() {
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.comment_details.length; x++) {
      this.username[x] = this.comment_details[x].userName;
      this.userid[x] = this.comment_details[x].userId;
      this.userbody[x] = this.comment_details[x].Body;
      this.userdate[x] = this.comment_details[x].date;
      this.LikesCount[x] = this.comment_details[x].LikesCount.toString();
      this.Photo[x] = this.comment_details[x].Photo;
      this.ReviewId[x] = this.comment_details[x].ReviewId;
      this.CommentId[x] = this.comment_details[x].CommentId;
    }
  }
  SendComment() {
    console.log(this.str);
    this.str = '';
    this.comments_service.post_Review();
  }
}
