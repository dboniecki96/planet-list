import {FormsModule}           from '@angular/forms';
import {NgxPaginationModule}   from 'ngx-pagination';
import {PlanetListComponent}   from './planet/planet-list/planet-list.component';
import {HttpClientModule}      from '@angular/common/http';
import {PlanetService}         from './planet/service/planet.service';
import {BrowserModule}         from '@angular/platform-browser';
import {NgModule}              from '@angular/core';
import {AppComponent}          from './app.component';
import {PlanetDetailComponent} from './planet/planet-detail/planet-detail.component';
import {RouterModule, Routes}  from '@angular/router';
import {PlanetNamePipe}        from './planet/planet-list/planet.pipe';
import {LoadingComponent}      from './loading/loading.component';

const routes: Routes = [
  {path: '', redirectTo: 'planets', pathMatch: 'full'},
  {path: 'planets', component: PlanetListComponent},
  {path: 'planets/:planetNumber', component: PlanetDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    PlanetNamePipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
