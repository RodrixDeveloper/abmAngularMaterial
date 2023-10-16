import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/models/empleado';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreCompleto',
    'correo',
    'estadoCivil',
    'fechaIngreso',
    'sexo',
    'telefono',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Empleado>();

  listEmpleados: Empleado[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _empleadoService: EmpleadoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.cargarEmpleados();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.listEmpleados = this._empleadoService.getEmpleados();

    // Guardar el estado actual de la paginación y clasificación
    const paginator = this.dataSource.paginator;
    const sort = this.dataSource.sort;

    this.dataSource = new MatTableDataSource(this.listEmpleados);

    // Restaurar el estado de la paginación y clasificación
    this.dataSource.paginator = paginator;
    this.dataSource.sort = sort;

    console.log(this.listEmpleados);
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el empleado' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        console.log(index);
        this._empleadoService.eliminarEmpleado(index);
        this.snackBar.open("El empleado fue eliminado con exito", '',{
          duration: 3000
        });
        this.cargarEmpleados();
      }
    });
  }
}
