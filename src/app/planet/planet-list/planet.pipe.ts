import {Pipe, PipeTransform} from '@angular/core';
import {PlanetDetails}       from '../models/planet.model';

@Pipe({
  name: 'planetName'
})
export class PlanetNamePipe implements PipeTransform {
  transform(planets: PlanetDetails[], planetName: string): PlanetDetails[] {
    if (!planetName || planetName === '') {
      return planets;
    }
    return planets.filter(planet => planet.name.toLowerCase().includes(planetName.toLowerCase()));
  }
}
