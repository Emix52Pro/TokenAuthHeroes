import { Component } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent {
  
  heroes:Heroe[]=[]
  heroes2:Heroe[]=[]

  ngOnInit(): void{
  window.scrollTo(0, 0);
  this.heroes = this._heroesService.getHeroes();
  console.log(this.heroes);
  }

  constructor(private _heroesService:HeroesService, private router:Router){
    this.heroes = this._heroesService.getHeroes();
    this.heroes2 = this.heroes;
  }
  
  filterResults(text: string) {
    if (!text) {
      this.heroes2 = this.heroes;
    }
  
    this.heroes2 = this.heroes.filter(
      heroe => heroe?.nombre.toLowerCase().includes(text.toLowerCase())
    );
  }

  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }


}

