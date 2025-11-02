import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo.model';

describe('VehiculoListComponent', () => {
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  const vehiculosMock: Vehiculo[] = [
    {
      id: 1,
      marca: 'Renault',
      linea: 'Kangoo',
      referencia: 'VU Express',
      modelo: 2017,
      kilometraje: 93272,
      color: 'Blanco',
      imagen:
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
    },
    {
      id: 2,
      marca: 'Chevrolet',
      linea: 'Spark',
      referencia: 'Life',
      modelo: 2018,
      kilometraje: 55926,
      color: 'Plata',
      imagen: 'https://example.com/spark.jpg'
    },
    {
      id: 3,
      marca: 'Nissan',
      linea: 'March',
      referencia: 'Active Plus',
      modelo: 2019,
      kilometraje: 31298,
      color: 'Plata',
      imagen: 'https://example.com/march.jpg'
    }
  ];

  beforeEach(async () => {
    mockVehiculoService = jasmine.createSpyObj<VehiculoService>('VehiculoService', [
      'getVehiculos'
    ]);
    mockVehiculoService.getVehiculos.and.returnValue(of(vehiculosMock));

    await TestBed.configureTestingModule({
      imports: [VehiculoListComponent],
      providers: [{ provide: VehiculoService, useValue: mockVehiculoService }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VehiculoListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render table with header and 3 rows', () => {
    const fixture = TestBed.createComponent(VehiculoListComponent);
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    const headerRows = compiled.querySelectorAll('thead tr');
    const bodyRows = compiled.querySelectorAll('tbody tr');

    expect(headerRows.length).toBe(1);
    expect(bodyRows.length).toBe(3);
  });
});


