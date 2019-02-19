import { PlanetNamePipe } from './planet.pipe';
import { PlanetService } from './../service/planet.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlanetDetails } from '../models/planet-detail.model';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetListComponent implements OnInit {
  pageNumber = 1;
  pageCount: number;
  planetCount: number;
  planets: PlanetDetails[] = [];
  pageSizes = [5, 10, 25, 100];
  currentPageSize = 5;
  planetName: string;
  allDataLoaded: boolean = false;
  list: any;
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.list = this.planetService.getInfo().subscribe(
      res => {
        //Get planet count
        this.planetCount = res.count;
        console.log('Planet count: ' + this.planetCount);
        for (var i = 1; i < this.planetCount + 1; i++) {
          this.planetService.getPlanetDetail(i).subscribe(
            res => {
              this.planets.push(res);
              console.log(this.planets.length);
              if (this.planets.length === this.planetCount) {
                this.allDataLoaded = true;
                console.log('All data loaded: ' + this.allDataLoaded);
              }
            }
          );

        }

      },
      err => {
        console.log(err);
      }
    );

  }

  changePageSize(event: any) {
    this.currentPageSize = event;
    console.log(this.currentPageSize);
  }
  searchPlanet() {
    this.planets = this.planets.filter(x => {
      return x.name.toLocaleLowerCase().includes(this.planetName.toLocaleLowerCase());
    });
  }

}
