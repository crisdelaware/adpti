import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _resultados: any[] = [];

  get productos() {
    return  [...this._resultados];
  }

  getProducts() {
    this._resultados = JSON.parse(localStorage.getItem('productos') || '');
  }

  agregarProducto( producto: any ) {
    this._resultados.push(producto);
    localStorage.setItem('productos',JSON.stringify(this._resultados));
    this._resultados = JSON.parse(localStorage.getItem('productos') || '');
  }

  eliminarProducto(variable: any) {
    const eliminados = this.productos.filter(producto => producto.nombre != variable);
    localStorage.removeItem('productos');
    localStorage.setItem('productos', JSON.stringify(eliminados));
  }
  constructor() {}
}
