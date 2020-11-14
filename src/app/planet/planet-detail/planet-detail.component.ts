import {PlanetService}          from '../service/planet.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit}      from '@angular/core';
import {PlanetDetails}          from '../models/planet.model';
import {Observable}             from 'rxjs';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetDetails$: Observable<PlanetDetails>;

  constructor(private route: ActivatedRoute, private planetService: PlanetService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const planetNumber: number = params['planetNumber'];
      this.planetDetails$ = this.planetService.getPlanetDetail(planetNumber);
    });
  }
}
