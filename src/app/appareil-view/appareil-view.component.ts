import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  lastUpdate = new Date();

  appareils!: any[];

  isAuth = false;

  constructor(private appareilService: AppareilService){
    setTimeout(
      (): void => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.switchOn();
  }

  onEteindre() {
    this.appareilService.switchOff();
  }

}
