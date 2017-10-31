import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var glitch: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit 
{

  @ViewChild("picture")
  picture: ElementRef;

  baseImageUrl = "assets/img/";

  firstLoaded = false;
  picture1Url = "";

  secondLoaded = false;
  picture2Url = "";

  wrapperWidth: number;
  wrapperHeight: number;
  imageWidth: number;
  imageHeight: number;

  constructor() { }

  ngOnInit() 
  {
    this.wrapperWidth = this.picture.nativeElement.parentNode.offsetWidth;
    this.wrapperHeight = this.picture.nativeElement.parentNode.offsetHeight;
  }

  public ImageLoaded(number: number, id: string)
  {

      this.imageWidth = this.picture.nativeElement.offsetWidth;
      this.imageHeight = this.picture.nativeElement.offsetHeight;
  
      this.CenterImage(number, id);

      if(number == 1)
      {
        glitch(this.picture1Url, function(image, success, object)
        {
          var imageToGlitch = document.getElementById(id) as HTMLImageElement;
          imageToGlitch.src = image;
        }, 25, 20);
        this.firstLoaded = true;
      }
      else if(number == 2)
      {
        this.secondLoaded = true;
      }

  }

  public TitleLoaded()
  {
    this.picture1Url = this.baseImageUrl + "intro1.jpg";
  }

  public CenterImage(number: number, id: string)
  {

    if(this.imageWidth > this.wrapperWidth || this.imageHeight < this.wrapperHeight)
    {
      this.picture.nativeElement.style.height = "100%";
      this.picture.nativeElement.style.width = "";
      this.RecalculateDimensions();
    }

    if(this.imageWidth < this.wrapperWidth)
    {
      this.picture.nativeElement.style.height = "";
      this.picture.nativeElement.style.width = "100%";
      this.RecalculateDimensions();
    }

    this.picture.nativeElement.style.left = "-" + (this.imageWidth - this.wrapperWidth)/2 + "px";

  }

  public RecalculateDimensions()
  {
    this.imageWidth = this.picture.nativeElement.offsetWidth;
    this.imageHeight = this.picture.nativeElement.offsetHeight;
    this.wrapperWidth = this.picture.nativeElement.parentNode.offsetWidth;
    this.wrapperHeight = this.picture.nativeElement.parentNode.offsetHeight;
  }

}
