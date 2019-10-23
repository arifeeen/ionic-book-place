import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    this.loadingController
      .create({ keyboardClose: true, message: 'Please wait while loading ...' })
      .then(ldcon => {
        ldcon.present();
        setTimeout(() => {
          this.authService.login();
          ldcon.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 2000);
      });
  }
}
