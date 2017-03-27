import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';

/*
  Generated class for the CampDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})

export class CampDetailsPage {

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
    public dataService: Data, public navParams: NavParams) {

      // 

    }

  saveForm(): void {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CampDetailsPage');
  }

}
