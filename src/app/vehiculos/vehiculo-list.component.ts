import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo.model';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  loading = false;
  error?: string;

  constructor(private readonly vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar los vehículos.';
        this.loading = false;
      }
    });
  }
}


