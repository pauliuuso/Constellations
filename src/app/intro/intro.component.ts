import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { LinkService } from '../link.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit, OnDestroy
{
  private unsubscribe: Subject<void> = new Subject<void>();

  @ViewChild("video")
  video: ElementRef;

  baseUrl = "assets/img/intro/";

  videoRandom = this.linkService.GetRandomRange(0, this.linkService.introVideos.length);
  pictureUrl = this.baseUrl + this.linkService.introVideos[this.videoRandom]["picture"];
  videoUrl = this.baseUrl + this.linkService.introVideos[this.videoRandom]["video"];
  titleUrl = this.baseUrl + this.linkService.introTitles[0];

  titleLoaded = false;
  imageLoaded = false;

  wrapperWidth: number;
  wrapperHeight: number;
  imageWidth: number;
  imageHeight: number;

  constructor( private linkService: LinkService, private router: Router ) { }

  ngOnInit() {}

  ngOnDestroy()
  {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public ShowImage()
  {
    console.log("show image");
    if(this.imageWidth > 0 && this.imageHeight > 0 && !this.imageLoaded)
    {
      this.video.nativeElement.className += " animated fadeIn";
      this.imageLoaded = true;
    }
    this.CenterImage();
  }

  public TitleLoaded()
  {
    this.titleLoaded = true;
    Observable.interval(1000)
    .takeUntil(this.unsubscribe)
    .subscribe(() => this.ShowImage())
    ;
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

  public GotoGallery()
  {
    this.router.navigate(["gallery"]);
  }

}
