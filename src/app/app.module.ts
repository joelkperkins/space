import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SunComponent } from './server/sun.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ServersComponent } from './servers/servers.component';
import { MercuryComponent } from './server/mercury/mercury.component';
import { VenusComponent } from './server/venus/venus.component';
import { EarthComponent } from './server/earth/earth.component';
import { MarsComponent } from './server/mars/mars.component';
import { AsteroidBeltComponent } from './server/asteroid-belt/asteroid-belt.component';
import { JupiterComponent } from './server/jupiter/jupiter.component';
import { SaturnComponent } from './server/saturn/saturn.component';
import { UranusComponent } from './server/uranus/uranus.component';
import { NeptuneComponent } from './server/neptune/neptune.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    ServersComponent,
    MercuryComponent,
    VenusComponent,
    EarthComponent,
    MarsComponent,
    AsteroidBeltComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  // tracks the component when it starts
  bootstrap: [AppComponent]
})
export class AppModule { }
