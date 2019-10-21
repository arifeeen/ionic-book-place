import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss']
})
export class OfferDetailPage implements OnInit {
  offerId: string;
  constructor(private navController: NavController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.offerId = paramMap.get('offerId');

      console.log("offer booking", this.offerId);
    });
  }

  goBack() {
    this.navController.navigateBack('/places/tabs/offers');
  }
}
