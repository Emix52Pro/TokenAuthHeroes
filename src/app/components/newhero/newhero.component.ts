import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-newhero',
  templateUrl: './newhero.component.html',
  styleUrls: ['./newhero.component.css']
})


export class NewheroComponent implements OnInit {
  nuevoHeroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  agregarHeroe(): void {
    // Aquí puedes agregar la lógica de validación antes de guardar el nuevo héroe
  
    this.heroesService.getHeroes2().push(this.nuevoHeroe);
    this.heroesService.updateHeroes2(this.heroesService.getHeroes2());
    // Limpia los campos después de agregar el héroe
    this.nuevoHeroe = {
      nombre: '',
      bio: '',
      img: '',
      aparicion: '',
      casa: ''
    };
  }

}

