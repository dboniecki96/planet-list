import { Planet } from '../models/planet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanetDetails } from '../models/planet-detail.model';

@Injectable()
export class PlanetService {
  url = 'https://swapi.dev/api/planets/';
  constructor(private http: HttpClient) { }

  //get info about planet list (count, results, etc.)
  getInfo() {
    return this.http.get<Planet>(this.url);
  }
  //get planet detail by url
  getPlanetDetail(planetNumber: number) {
    return this.http.get<PlanetDetails>(this.url + planetNumber.toString() + '/');
  }
}
