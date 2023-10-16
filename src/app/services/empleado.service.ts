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

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
  }
}
