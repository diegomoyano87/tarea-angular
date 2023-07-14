import { Component } from '@angular/core';

type Producto = {
  nombre: string;
  costo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  verProducto = true;  
  productos: Producto[] = [
    {
      nombre: 'Lavarropa',
      costo:'45000',
    },
    {
      nombre: 'Heladera',
      costo:'60000',
    },
    {
      nombre: 'Cocina',
      costo:'50000',
    },
    {
      nombre: 'Aspiradora',
      costo:'15000',
    },
       ] 
    
      }

      

   
  
