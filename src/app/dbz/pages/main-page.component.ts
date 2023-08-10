import { DbzModule } from './../dbz.module';

import { Component} from '@angular/core';
//import { Character } from './../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
//a- com + tab crea la estructura @component

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  /*
  El constructor conserva los datos al enviarlos al dbz.service que despues   van a la vista que causaba el error en el main-page.html
  el constructor va hacer la inyeccion de depencias al servicio

*/

  constructor ( private dbzService: DbzService ) {}

   //poniendo los getter para mandar el datos privado y enviarlos a la vista
  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharaterById(id);
  }


 onNewCharacter( character: Character):void{
  this.dbzService.addCharacter(character);

 }

}



  //public nameDbz: string = 'DBZ Personajes';


  /*
  hay que hacer una interface character.interface.ts
  porque no sabemos el tipo de datos que vamos a usar
  entonces hay que definirlo en la interface y importalo

  public characters: ???[]=[];

  */

/*
  //moviendo este bloque al Service porque es la logica de negocio
  public characters: Character[]=[{
    name: 'Krilin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7200
  }
];


    onNewCharacter( character:Character) :void {
      console.log('MainPage');
      console.log(character);

      //para agregar un nuevo objeto de la lista
      //al  final push
      //al inicio unshif

      this.characters.push(character);
}

    onDeleteCharacter( index:number ) {
      //console.log(this.characters);
      this.characters.splice(index,1);
 }

*/


  /*
  get capitalizedName():string {
    return this.nameDbz.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.nameDbz }`;
  }
  */

//}
