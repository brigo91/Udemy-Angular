import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name="";
  loadedFeature = "recipe";

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDyS9S3RdE47Kpq-fQKNQU9LpeeDq85rHs",
      authDomain: "ng-recipe-book-3e2c0.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
