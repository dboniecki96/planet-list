import { PlanetDetails } from './planet-detail.model';
export class Planet {
    constructor(
        public count: number,
        public next: string,
        public previous: any,
        public results: PlanetDetails[]
    ) { }
}