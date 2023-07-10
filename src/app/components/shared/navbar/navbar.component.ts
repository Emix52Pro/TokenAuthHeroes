import { Component } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
//heroes:any[]=[];
export class NavbarComponent {
  
  heroes:Heroe[]=[]
  heroes2:Heroe[]=[]
  constructor(private _heroesService:HeroesService){
    this.heroes = this._heroesService.getHeroes();
    this.heroes2 = this.heroes;
  }
    search : String ="";

    filterResults(text: string) {
      if (!text) {
        this.heroes2 = this.heroes;
      }
    
      this.heroes2 = this.heroes.filter(
        heroe => heroe?.nombre.toLowerCase().includes(text.toLowerCase())
      );
    }
    
 
}
