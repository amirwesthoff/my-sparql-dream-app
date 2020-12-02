import { Component } from '@angular/core';
import { FunctiesService } from 'src/services/functies.service';
import { RollenService } from 'src/services/rollen.service';
import { MedewerkersService } from 'src/services/medewerkers.service';
import { Triple } from 'src/assets/triple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RDF App';
  readonly URL = '/repositories/Sogeti';

  medewerkers: Triple[];
  functies: Triple[];
  alleRollen: Triple[];

  constructor(
    private rollenService: RollenService,
    private functiesService: FunctiesService,
    private medewerkersService: MedewerkersService,
  ) {}
  
  haalFunctiesOp(): void {
    this.functiesService.getFuncties()
      .subscribe(data => this.functies = data);
  }

  haalRollenOp(): void {
    this.rollenService.getAlleRollen()
      .subscribe(data => this.alleRollen = data);
  }

  haalMedewerkersOp(): void {
    this.medewerkersService.getMedewerkers()
      .subscribe(data => this.medewerkers = data);
  }

}
