import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  heroes: Heroe[] = [];
  heroes2: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router, public userService: UserService ) {
    this.heroes = this._heroesService.getHeroes();
    this.heroes2 = this.heroes;
  }

  public search_string: string = '';

  updateSearchString(text: string) {
    this.search_string = text; // Actualizar el valor local de search_string
    this.filterResults();
  }

  filterResults() {
    if (!this.search_string) {
      this.heroes2 = this.heroes;
    } else {
      this.heroes2 = this.heroes.filter(
        (heroe) =>
          heroe?.nombre.toLowerCase().includes(
            this.search_string.toLowerCase()
          )
      );
    }

    // Actualizar la variable en el servicio
    this._heroesService.updateHeroes2(this.heroes2);
    this.router.navigate(['/heroes']);
  }
  
  buttonconf(){
    if (this.userService.isloggedin() == true) {

    }else{

    }
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
