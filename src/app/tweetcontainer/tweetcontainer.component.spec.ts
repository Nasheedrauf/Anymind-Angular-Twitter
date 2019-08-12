import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetConatinerComponent } from './tweetcontainer.component'

describe('HashtagComponent', () => {
  let component: TweetConatinerComponent;
  let fixture: ComponentFixture<TweetConatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetConatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
