//import { ListComponent } from './../../../heroes/list/list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})


export class ListComponent {

//envia el listado a listComponent hay que poner @Input
//Input recibe una propiedad para poder enviar a otro componente exterior
//que es el main-page.componente.html

@Input()
public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }];

  //haciendo un event-emitter
  @Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
  //hay que cambia el tipo de daato number por un string proque estamos borrando por ById
  public onDelete: EventEmitter<string> = new EventEmitter();

  //se puede definir tambien de esta manera
  //public onDelete = new EventEmitter<number>();

  /*
  enviamos el dato de index a la vista con (click)="onDeleteCharacter(i)          // list.componente.html
   onDeleteCharacter(index: number): void{
  */

  //cambiamos de tipo index a string  para borrar por tipo ById
  //y le ponemos opcional el id con ?
    onDeleteCharacter(id?: string): void{
     //validamos que no tenga un id para que no haga nada
      if( !id ) return;
    //TODO: emitir el id del personaje
    //this.onDelete.emit(index);
    //console.log({index})

    //cambiando por id
  this.onDelete.emit(id);
    console.log({id})
  }


}

