import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

//en service vamos utilizar @Injectable la inyeccion de dependencias


@Injectable({
  providedIn: 'root'
})

//el servico hace un singleton en toda la aplicacion

export class DbzService {

   //bloque traido de main-page.component.ts
   public characters: Character[]=[{
    //agregando un uuid que genera un id automatico
    id:uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id:uuid(),
    name: 'Goku',
    power: 9500
  },{
    id:uuid(),
    name: 'Vegeta',
    power: 7200
  }
];


    addCharacter( character:Character) :void {

      //para agregar un nuevo elemento que  es uuid lo definimos
      //y ponemos el newCharacter en el metodo y con ...character le indicamos
      // que tome las propiedades y exparcela en todo el objeto nuevo que es character
      const newCharacter: Character = {
        id: uuid(), ...character };

        //name: character.name,
        //power: character.power
        //}


      this.characters.push(newCharacter);
     //this.characters.push(character);
}


   //se comenta porque ahora vamos a eliminr por el id
/*
   onDeleteCharacter( index:number ) {
     this.characters.splice(index,1);
    }
*/


deleteCharaterById(id: string){

this.characters = this.characters.filter(characters => characters.id !== id);
};

}

