import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { LinkService } from '../link.service';
declare var $:any;

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit
{
  smallerThanWrapper = false;
  wrapperWidth: number;
  wrapperHeight: number;
  imageWidth: number;
  imageHeight: number;

  @ViewChild("picture")
  picture: ElementRef;

  @Input()
  url: string;

  @Input()
  id: string;

  constructor(private linkService: LinkService) { }

  ngOnInit()
  {
    this.wrapperWidth = this.picture.nativeElement.parentNode.offsetWidth;
    this.wrapperHeight = this.picture.nativeElement.parentNode.offsetHeight;
  }

  public ImageLoaded()
  {
    this.linkService.imagesLoaded++;
    this.imageWidth = this.picture.nativeElement.width;
    this.imageHeight = this.picture.nativeElement.height;
    this.CenterImage();
  }

  public decode(text: string)
  {
    return decodeURI(text);
  }

  public CenterImage()
  {
    if(this.imageWidth > this.wrapperWidth)
    {
      this.smallerThanWrapper = false;
      this.picture.nativeElement.style.left = "-" + (this.picture.nativeElement.width - this.wrapperWidth)/2 + "px";
    }
    else
    {
      this.smallerThanWrapper = true;
    }

    if(this.picture.nativeElement.height > this.wrapperHeight)
    {
      this.picture.nativeElement.style.top = "-" + (this.picture.nativeElement.height - this.wrapperHeight)/2 + "px";
    }
  }

  public OnResize()
  {
    this.wrapperWidth = this.picture.nativeElement.parentNode.offsetWidth;
    this.wrapperHeight = this.picture.nativeElement.parentNode.offsetHeight;
    this.CenterImage();
  }

}
