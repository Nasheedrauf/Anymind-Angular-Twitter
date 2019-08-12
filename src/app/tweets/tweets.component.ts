import { Component, OnInit, Input } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
import { Tweets } from '../models/tweets';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input('url') url: string;
  @Input('placeholder') placeholder: string;
  @Input('filter') filterproperty: string;
  @Input('title') title: string;
  tweets:Array<Tweets> = [];
  page: any = 1;
  pageSize: number = 10;
  filter:string="";
  constructor(private http:HttpserviceService) { }

  ngOnInit() {
     this.http.Get(this.url)
      .subscribe(res => {
        this.tweets = res;
      
      }, err => {
        console.log(err);
      });
  }

}
