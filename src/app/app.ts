import { Component, signal } from '@angular/core';
import { VehiculoListComponent } from './vehiculos/vehiculo-list.component';

@Component({
  selector: 'app-root',
  imports: [VehiculoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('front');
}
