import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Iroman', 'Spiderman', 'Hulk', 'Thor', 'Capitan America', 'Luffy', 'Sanji', 'Zorro Ronoa'];

  borrarHeroes(){

    this.heroes.pop()
  }

}
