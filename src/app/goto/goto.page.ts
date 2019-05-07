import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-goto',
  templateUrl: './goto.page.html',
  styleUrls: ['./goto.page.scss'],
})
export class GotoPage implements OnInit {

  constructor(public navCtri: NavController) { }

  ngOnInit() {
  }

  goTo(url){
    return this.navCtri.navigateRoot(url);
  }
}
