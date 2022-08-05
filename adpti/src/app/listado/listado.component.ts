import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  get productos() {
    return this.service.productos;
  }


  miFormulario = this.fb.group({
    // id: new FormControl ('', ),
    categoria: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required]),
    cantidad: new FormControl ('', [Validators.required]),
    descripcion: new FormControl ('', [Validators.required]),

  });

  constructor(private service: ServicesService, private fb: FormBuilder)  {
    this.service.getProducts();
  }

  eliminar(nombre: string) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarProducto(nombre);
        Swal.fire(
          'Eliminado!',
          'Su registro ha sido eliminado.',
          'success'
        )
        this.service.getProducts();
      }
    })

  }

  editar(producto: any) {

  }

}
