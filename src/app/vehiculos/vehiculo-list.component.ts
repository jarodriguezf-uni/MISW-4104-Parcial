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
  totals: { marca: string; total: number }[] = [];

  constructor(private readonly vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.totals = this.calculateTotalsByMarca(data);
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar los vehículos.';
        this.loading = false;
      }
    });
  }

  private calculateTotalsByMarca(items: Vehiculo[]): { marca: string; total: number }[] {
    const brandToCount = new Map<string, number>();
    for (const v of items) {
      brandToCount.set(v.marca, (brandToCount.get(v.marca) ?? 0) + 1);
    }
    return Array.from(brandToCount.entries()).map(([marca, total]) => ({ marca, total }));
  }
}


