import { Injectable } from '@angular/core';
import { Empleado } from 'src/models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'rodrigo',
      correo: 'rodrio@gmail..com',
      telefono: 484845,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
  ];
  constructor() {}
  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index:number){
    this.listEmpleado.splice(index,1);
  }
}
