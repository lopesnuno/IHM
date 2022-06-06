import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private orientation: ScreenOrientation) { 
    this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

}
