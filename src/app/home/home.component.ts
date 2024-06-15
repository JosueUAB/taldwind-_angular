import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Planes } from '../interfaces/planes.interfaces';

@Component({
  selector: 'app-home', // es aquel que nosndice para llamar a otro componentes
  standalone: true,
  imports: [CommonModule,
            FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = 'bienvenido a mi primer SPA';
  principiante :string='Principiante';
  pro :string='Pro';
  busines :string='Negocios';
  special :string='Especial';
  // *!numeros
  free:string ='Gratis';
  precio2:number =23;
  precio3:number =60;
  precio4:number =80;
  //**boleanos */
  activo1:boolean = false;
  activo2:boolean = true;
  activo3:boolean = false;
  activo4:boolean = true;

  // *ARREGLOS

  paquete=[0,1,2,'israel',true,5];
  paquetes=['internet - 3.5 GB','Whatsapp-facebook-snapcha- instragram']

  // *OBJETOS

  detallesP={
    detalles1:'Internet 3.5GB',
    detalles2:'WhatsApp , Facebook, X (Twitter),'

  }
  //! ARREGLOS CON OBJETOS
planes:Planes[]=[
  {
    tipo:'Principiante',
    activo:true,
    precio:'Gratis',
    detalles1:'Internet 3.5GB',
    detalles2:'WhatsApp , Facebook, X (Twitter),',
    detalles3:'minutos y llamandas',
  },
  {
    tipo:'Pro',
    activo:false,
    precio:23,
    detalles1:'Internet 4.5GB',
    detalles2:'WhatsApp , Facebook, X (Twitter), instragram, youtube',
    detalles3:'minutos y llamandas',
  },
  {
    tipo:'Negocios',
    activo:true,
    precio:'60',
    detalles1:'Internet 3.5GB',
    detalles2:'WhatsApp , Facebook, X (Twitter),',
    detalles3:'minutos y llamandas',
  },
  {
    tipo:'Especial',
    activo:false,
    precio:80,
    detalles1:'Internet 4.5GB',
    detalles2:'WhatsApp , Facebook, X (Twitter), instragram, youtube',
    detalles3:'minutos y llamandas',
  },


]

mostrar=false;


mostrarplanes=false;

  constructor(){


  }
  ngOnInit(){
    // console.log(this.paquete[3])
    // console.log(this.paquetes[1])
   // console.log(this.detallesP.detalles2);
  //  console.log(this.paquetes);
  //  console.log(this.detallesP)
  console.log(this.planes);
  // console.log('_____',this.planes[1]);

  // console.log('_____',this.planes[1].detalles1);

  console.log(this.planes)

  }



}
