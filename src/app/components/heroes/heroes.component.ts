import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes2: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroes2 = this._heroesService.heroes2; // Utilizar el arreglo heroes2 del servicio
    window.scrollTo(0, 0);
  }

  verHeroe(idx: number) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
