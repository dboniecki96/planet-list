import { PlanetService } from '../service/planet.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlanetDetails } from '../models/planet-detail.model';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  allDataLoaded: boolean = false;
  planetNumber: number;
  planetDetails: PlanetDetails = new PlanetDetails('', '', '', '', '', '', '', '', '', [], [], '', '', '');
  constructor(private route: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.planetNumber = params['planetNumber'];
        console.log(this.planetNumber);
        this.planetService.getPlanetDetail(this.planetNumber).subscribe(
          res => {
            this.planetDetails = res;
            this.allDataLoaded = true;
          },
          err => {
            console.log(err)
          }
        );
      }
    )
  }

}
