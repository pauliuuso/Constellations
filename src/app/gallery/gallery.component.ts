import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { LinkService } from '../link.service';
declare var $:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit
{
  public loading = true;
  public preloadImagesCount = 20;
  private unsubscribe: Subject<void> = new Subject<void>();

  public constellations =
  [
    {
      "id": 1, "url": "https://s11.favim.com/610/160212/camera-creek-guy-nature-Favim.com-3988876.jpg"
    },
    {
      "id": 2, "url": "https://i.pinimg.com/736x/72/b4/70/72b47084f09b86f5609296de5ffca6eb--mountain-girl-photography-faith-photography.jpg"
    },
    {
      "id": 3, "url": "https://s4.favim.com/orig/150118/love-snow-sunrise-sunset-Favim.com-2396204.jpg"
    },
    {
      "id": 4, "url": "https://i.pinimg.com/736x/23/1f/86/231f86b66edb51cb1fddb5544c7b61c4--aesthetic-photography-people-portraits-winter-photography-portraits.jpg"
    },
    {
      "id": 5, "url": "http://www.environmentandsociety.org/sites/default/files/styles/popup/public/yakushima_forest_genta_masuda.jpg?itok=kMqaxnKt"
    },
    {
      "id": 6, "url": "https://www.eurekalert.org/multimedia/pub/web/123350_web.jpg"
    },
    {
      "id": 7, "url": "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_jpg,h_565,q_65,w_1024/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DNordmarka_Triungsvann__c_VisitOSLO_Tord-Baklund_1046815552.jpg"
    },
    {
      "id": 1, "url": "https://s11.favim.com/610/160212/camera-creek-guy-nature-Favim.com-3988876.jpg"
    },
    {
      "id": 2, "url": "https://i.pinimg.com/736x/72/b4/70/72b47084f09b86f5609296de5ffca6eb--mountain-girl-photography-faith-photography.jpg"
    },
    {
      "id": 3, "url": "https://s4.favim.com/orig/150118/love-snow-sunrise-sunset-Favim.com-2396204.jpg"
    },
    {
      "id": 4, "url": "https://i.pinimg.com/736x/23/1f/86/231f86b66edb51cb1fddb5544c7b61c4--aesthetic-photography-people-portraits-winter-photography-portraits.jpg"
    },
    {
      "id": 5, "url": "http://www.environmentandsociety.org/sites/default/files/styles/popup/public/yakushima_forest_genta_masuda.jpg?itok=kMqaxnKt"
    },
    {
      "id": 6, "url": "https://www.eurekalert.org/multimedia/pub/web/123350_web.jpg"
    },
    {
      "id": 7, "url": "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_jpg,h_565,q_65,w_1024/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DNordmarka_Triungsvann__c_VisitOSLO_Tord-Baklund_1046815552.jpg"
    },
    {
      "id": 1, "url": "https://s11.favim.com/610/160212/camera-creek-guy-nature-Favim.com-3988876.jpg"
    },
    {
      "id": 2, "url": "https://i.pinimg.com/736x/72/b4/70/72b47084f09b86f5609296de5ffca6eb--mountain-girl-photography-faith-photography.jpg"
    },
    {
      "id": 3, "url": "https://s4.favim.com/orig/150118/love-snow-sunrise-sunset-Favim.com-2396204.jpg"
    },
    {
      "id": 4, "url": "https://i.pinimg.com/736x/23/1f/86/231f86b66edb51cb1fddb5544c7b61c4--aesthetic-photography-people-portraits-winter-photography-portraits.jpg"
    },
    {
      "id": 5, "url": "http://www.environmentandsociety.org/sites/default/files/styles/popup/public/yakushima_forest_genta_masuda.jpg?itok=kMqaxnKt"
    },
    {
      "id": 6, "url": "https://www.eurekalert.org/multimedia/pub/web/123350_web.jpg"
    },
    {
      "id": 7, "url": "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_jpg,h_565,q_65,w_1024/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DNordmarka_Triungsvann__c_VisitOSLO_Tord-Baklund_1046815552.jpg"
    }
  ];

  constructor(private linkService: LinkService) { }

  ngOnInit()
  {
    this.linkService.imagesLoaded = 0;
    Observable.interval(500)
    .takeUntil(this.unsubscribe)
    .subscribe(x =>
    {
      if(this.linkService.imagesLoaded > this.preloadImagesCount - 1)
      {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
      }
    });
  }

}
