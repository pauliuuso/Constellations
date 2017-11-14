import { Injectable } from '@angular/core';

@Injectable()
export class LinkService 
{

  public introVideos =
  [
    { "video": "intro1", "picture": "intro1.jpg" },
    { "video": "intro2", "picture": "intro2.jpg" },
  ];

  public introTitles =
  [
    "title1.gif"
  ];

  constructor() { }

  public GetRandomRange(from: number, to: number)
  {
    return Math.floor(Math.random() * to) + from;
  }

}
