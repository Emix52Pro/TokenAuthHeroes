import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnDestroy {
  heroes2: Heroe[] = [];
  private heroesSubscription: Subscription;

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) {
    // Suscribirse a los cambios en el arreglo heroes2 del servicio
    this.heroesSubscription = this._heroesService.getHeroes2Observable().subscribe(
      (heroes) => {
        this.heroes2 = heroes;
      }
    );

    // Detectar cambios de ruta para refrescar la vista cuando se navegue a la página de "heroes"
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/heroes') {
        this.refreshHeroes();
      }
    });
  }
  ngOnInit(): void {

    this.heroes2 = this._heroesService.getHeroes();
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción al destruir el componente
    this.heroesSubscription.unsubscribe();
  }

  refreshHeroes() {
    this.heroes2 = this._heroesService.getHeroes2();
  }

  verHeroe(idx: number) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
