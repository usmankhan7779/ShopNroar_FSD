import { Component, OnInit } from '@angular/core';
import {AppServices} from '../app.services';

@Component({
  selector: 'app-apparel-accessories',
  templateUrl: './apparel-accessories.component.html',
  styleUrls: ['./apparel-accessories.component.css']
})
export class ApparelAccessoriesComponent implements OnInit {

  public Electronics: any = [];
  filteredbrand: any;
  filteredmerchant: any;
  filteredsub: any;
  CatName: any;
  pagecount = 36;
  lowprice: any;
  highprice: any;
  modelNo = '166';
  sort: any;
  pageno = 1;
  i = 0;


  slideConfig8 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    prevArrow: '<button class="leftRsBanner"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="rightRsBanner"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 603,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  constructor(private AppService: AppServices) {
  }

  ngOnInit() {
    this.getElectronicsCategory();
  }

  getElectronicsCategory() {
    this.AppService.getHomeData().subscribe(data => {
      this.Electronics = data['home_Apperel'];
      for(let item of this.Electronics){
        item['SNR_ImageURL'] = item['SNR_ImageURL'].split(',')[0];
      }

      // console.log('Categories are:', this.Categories);
      // console.log('merchants are:', this.merchants);
    });

  }

}
