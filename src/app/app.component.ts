import { Component } from '@angular/core';
import { CrmService } from './services/crm.service';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  alumnos: any[] = [];

  alumno: Alumno = new Alumno();

  constructor(private crmService: CrmService) {
  }

  crearAlumno(): void {
    let alumno: Alumno = new Alumno();
    alumno.id="1"
    alumno.nombre = 'Anderson';
    alumno.apellidos = 'Bengolea';
    alumno.email = 'ander@gmail.com'
    alumno.carrera = 'SISTEMAS';
    alumno.celular = '998877662';
    alumno.fechaCum = '2021-11-15T02:32:12.868Z';
    alumno.dni = '99772211'
    alumno.sexo = 'M';

    this.crmService.saveAlumno(alumno)
        .subscribe(response => console.log(response));
    
  }

}
