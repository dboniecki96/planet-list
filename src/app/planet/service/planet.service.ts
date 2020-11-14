import {PlanetDetails, PlanetsInfo} from '../models/planet.model';
import {HttpClient}                 from '@angular/common/http';
import {Injectable}                 from '@angular/core';
import {Observable}                 from 'rxjs';
import {API_ROOT, planetByNumber}   from './api';

@Injectable()
export class PlanetService {
  constructor(private http: HttpClient) {
  }

  getInfo(): Observable<PlanetsInfo> {
    return this.http.get<PlanetsInfo>(API_ROOT);
  }

  getPlanetDetail(planetNumber: number): Observable<PlanetDetails> {
    return this.http.get<PlanetDetails>(planetByNumber(planetNumber));
  }
}
