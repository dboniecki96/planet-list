import {PaginatePipeArgs} from 'ngx-pagination/dist/paginate.pipe';

export interface PlanetsInfo {
  count: number;
  next: string;
  previous: any;
  results: PlanetDetails[];
}

export interface PlanetDetails {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PaginatorConfig extends PaginatePipeArgs {
  pageSizes: number[];
}
