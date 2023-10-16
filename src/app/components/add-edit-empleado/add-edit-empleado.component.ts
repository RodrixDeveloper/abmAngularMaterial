import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/models/empleado';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];
  idEmpleado: number;
  accion = 'Crear';
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private router: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      telefono: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      sexo: ['', Validators.required],
    });

    this.idEmpleado = this.aRoute.snapshot.params['id'];
    console.log(this.idEmpleado);
  }
  ngOnInit(): void {
    if (this.idEmpleado != undefined) {
      this.accion = 'Editar';
      this.obtenerEmpleado();
    }
  }

  guardarEmpleado() {
    console.log(this.myForm);
    const EMPLEADO: Empleado = {
      nombreCompleto: this.myForm.get('nombreCompleto')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value,
    };
    if (this.idEmpleado != undefined) {
      this.editarEmpleado(EMPLEADO);
    } else {
      this.agregarEmpleado(EMPLEADO);
    }
  }

  obtenerEmpleado() {
    const EMPLEADO: Empleado = this._empleadoService.getEmpleado(
      this.idEmpleado
    );
    this.myForm.patchValue({
      //patchValue setear a todos los controlers en cada input del formulario editar
      nombreCompleto: EMPLEADO.nombreCompleto,
      correo: EMPLEADO.correo,
      fechaIngreso: EMPLEADO.fechaIngreso,
      telefono: EMPLEADO.telefono,
      estadoCivil: EMPLEADO.estadoCivil,
      sexo: EMPLEADO.sexo,
    });
    console.log(EMPLEADO);
  }

  agregarEmpleado(empleado: Empleado) {
    this._empleadoService.agregarEmpleado(empleado);
    this.snackBar.open('El empleado fue registrado con exito', '', {
      duration: 3000,
    });
    this.router.navigate(['/']);
  }

  editarEmpleado(empleado: Empleado) {
    this._empleadoService.editEmpleado(empleado,this.idEmpleado);
    this.snackBar.open('El empleado fue actualizado con exito', '', {
      duration: 3000,
    });
    this.router.navigate(['/']);
  }
}
