export class Vehiculo {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;

  constructor(init?: Partial<Vehiculo>) {
    this.id = init?.id ?? 0;
    this.marca = init?.marca ?? '';
    this.linea = init?.linea ?? '';
    this.referencia = init?.referencia ?? '';
    this.modelo = init?.modelo ?? 0;
    this.kilometraje = init?.kilometraje ?? 0;
    this.color = init?.color ?? '';
    this.imagen = init?.imagen ?? '';
  }
}


