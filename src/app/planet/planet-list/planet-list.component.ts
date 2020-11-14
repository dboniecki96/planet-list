import {PlanetService}                               from '../service/planet.service';
import {Component, OnInit, ViewEncapsulation}        from '@angular/core';
import {PaginatorConfig, PlanetDetails, PlanetsInfo} from '../models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetListComponent implements OnInit {
  paginatorConfig: PaginatorConfig;
  planets: PlanetDetails[];
  planetName: string;
  isLoading: boolean;

  constructor(private planetService: PlanetService) {
    this.isLoading = false;
    this.planets = null;
    this.paginatorConfig = {
      currentPage: 1,
      pageSizes: [5, 10, 25, 100],
      itemsPerPage: 5,
      totalItems: 0
    };
  }

  ngOnInit() {
    this.planetService.getInfo().subscribe((info: PlanetsInfo) => {
      this.paginatorConfig.totalItems = info.count;
      this.getPlanets();
    }, () => alert('ERROR! Couldn\'t load items'));
  }

  getPlanets(): void {
    this.planets = null;
    this.isLoading = true;
    const planets: Array<PlanetDetails> = [];
    const iterator = (start: boolean = false) =>
      (+this.paginatorConfig.itemsPerPage * (+this.paginatorConfig.currentPage - (start ? 1 : 0)));
    for (let i = iterator(true); i < iterator(); i++) {
      this.planetService.getPlanetDetail(i + 1).subscribe(detail => planets.push(detail));
    }
    this.planets = planets;
    this.isLoading = false;
  }

  onChangePage(page: number): void {
    this.paginatorConfig.currentPage = page;
    this.getPlanets();
  }

  onChangePageSize($event: any): void {
    this.paginatorConfig.itemsPerPage = $event.target.value;
    this.getPlanets();
  }
}
