import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetName'
})
export class PlanetNamePipe implements PipeTransform {

  transform(planets: any[], planetName: string): any {
    if (!planetName || planetName === '') {
      return planets;
    }
    return planets.filter(x => x.name.toLowerCase().indexOf(planetName.toLowerCase()) > -1);
  }

}
