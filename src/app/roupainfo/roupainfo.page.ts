import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roupainfo',
  templateUrl: './roupainfo.page.html',
  styleUrls: ['./roupainfo.page.scss'],
})
export class RoupainfoPage implements OnInit {
  public tshirtInfo: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tshirtInfo = this.router.getCurrentNavigation().extras.state.dadosTshirt;
        console.log(this.tshirtInfo);
      }
    })
   }

  ngOnInit() {
  }

}
