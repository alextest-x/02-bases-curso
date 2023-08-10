import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',

})
export class AddCharacterComponent {


   //EventEmitter puede emitor objetos, numeros, string cualquier valor
   //en la propiedad EventEmitter
   //para que pueda enviar emitir los datos
   //hay que poner el decorador  @Output()

   @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();




  //se puede inicializar aqui o en el constructor
  public character: Character = {
    name: '',
    power: 0

  };


    //metodo para traer los objetos de la vista
    //se va emitir los objetos
    emitCharacter():void {
     //debugger;
      console.log(this.character);

      if(this.character.name.length===0) return;

      // event emtter onNewCharacter
      this.onNewCharacter.emit(this.character);

      //reseteando los valores que ya se han enviado
      //this.character.name='';
      //this.character.power=0;

      //simplificando
      this.character={ name:'', power: 0};

    }
}


