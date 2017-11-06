import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit 
{

  @ViewChild("video")
  video: ElementRef;

  baseUrl = "assets/img/intro/";

  pictureUrl = this.baseUrl + this.linkService.introVideos[0]["picture"];
  videoUrl = this.baseUrl + this.linkService.introVideos[0]["video"];
  titleUrl = this.baseUrl + this.linkService.introTitles[0];

  titleLoaded = false;
  imageLoaded = false;

  wrapperWidth: number;
  wrapperHeight: number;
  imageWidth: number;
  imageHeight: number;

  constructor( private linkService: LinkService ) { }

  ngOnInit() {}

  public ImageLoaded()
  {
    this.imageLoaded = true;
    this.ShowImage();
  }

  public ShowImage()
  {
    if(this.imageWidth === 0)
    {
      this.RecalculateDimensions();
      this.ShowImage();
    }
    else
    {
      this.CenterImage();
    }
  }

  public TitleLoaded()
  {
    this.titleLoaded = true;
    this.ImageLoaded();
  }

  public CenterImage()
  {
    this.RecalculateDimensions();

    if(this.imageWidth > this.wrapperWidth || this.imageHeight < this.wrapperHeight)
    {
      this.video.nativeElement.style.height = "100%";
      this.video.nativeElement.style.width = "";
      this.RecalculateDimensions();
    }

    if(this.imageWidth < this.wrapperWidth)
    {
      this.video.nativeElement.style.height = "";
      this.video.nativeElement.style.width = "100%";
      this.RecalculateDimensions();
    }

    this.video.nativeElement.style.left = "-" + (this.imageWidth - this.wrapperWidth)/2 + "px";

  }

  public RecalculateDimensions()
  {
    this.imageWidth = this.video.nativeElement.offsetWidth;
    this.imageHeight = this.video.nativeElement.offsetHeight;
    this.wrapperWidth = this.video.nativeElement.parentNode.offsetWidth;
    this.wrapperHeight = window.innerHeight;
  }

}
