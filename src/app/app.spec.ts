import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { VehiculoService } from './vehiculos/vehiculo.service';
import { Vehiculo } from './vehiculos/vehiculo.model';

describe('App', () => {
  const vehiculosMock: Vehiculo[] = [
    {
      id: 1,
      marca: 'Renault',
      linea: 'Kangoo',
      referencia: 'VU Express',
      modelo: 2017,
      kilometraje: 93272,
      color: 'Blanco',
      imagen: ''
    }
  ];

  beforeEach(async () => {
    const mockVehiculoService = {
      getVehiculos: () => of(vehiculosMock)
    } as Partial<VehiculoService> as VehiculoService;
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: VehiculoService, useValue: mockVehiculoService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render vehicles list heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('TuSegundazo.com');
  });
});
