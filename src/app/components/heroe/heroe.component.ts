import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
heroe:any={};
constructor(private activatedRoute: ActivatedRoute, private _heroeService:HeroesService, private location: Location){
  this.activatedRoute.params.subscribe(params =>{
    this.heroe= _heroeService.getHeroe(params['id']);
    console.log(this.heroe);
  })
}


 

  goBack(): void {
    this.location.back();

}}
