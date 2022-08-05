import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  {

  get productos() {
    return this.servicio.productos;
  }

  constructor( private servicio: ServicesService,
               private fb: FormBuilder ) {



               }


  miFormulario = this.fb.group({
    // id: new FormControl ('', ),
    categoria: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required]),
    cantidad: new FormControl ('', [Validators.required]),
    descripcion: new FormControl ('', [Validators.required]),

  });


  opciones: string[] = ['Vehiculos', 'Supermercado', 'Tecnologia', 'Electrodomesticos', 'Hogar y muebles', 'Moda', 'Deporte y Fitness'];


  agregar() {
    if(this.miFormulario.value.categoria == '1') {
      this.miFormulario.value.categoria = this.opciones[0]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    } else if(this.miFormulario.value.categoria == '2') {
      this.miFormulario.value.categoria = this.opciones[1]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    } else if(this.miFormulario.value.categoria == '3') {
      this.miFormulario.value.categoria = this.opciones[2]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    } else if(this.miFormulario.value.categoria == '4') {
      this.miFormulario.value.categoria = this.opciones[3]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    } else if(this.miFormulario.value.categoria == '5') {
      this.miFormulario.value.categoria = this.opciones[4]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    } else if(this.miFormulario.value.categoria == '6') {
      this.miFormulario.value.categoria = this.opciones[5]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    }else if(this.miFormulario.value.categoria == '7') {
      this.miFormulario.value.categoria = this.opciones[6]
      this.servicio.agregarProducto(this.miFormulario.value);
      this.animacion();
    }
    this.miFormulario.reset();
  }

  animacion() {
    Swal.fire(
      'Exito',
      'Producto agregado',
      'success'
    )
  }


}
