import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Array<any> = [];

  constructor(public navCtrl: NavController, public MovieSrc: MovieapiService){
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.MovieSrc.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
