import { HttpClientModule } from '@angular/common/http';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  //let ht:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]});
      //ht=TestBed.inject(HttpTestingController)
    service = TestBed.inject(HeroService);
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('get',()=>{
  //   const her:any="Narco";
  //   var re:Hero;
  //   // service.getHero(12).subscribe(resp=>{
  //   //   expect(resp).toEqual(her);
  //   // });
  //   re=service.getHero(12);
  //   expect(re).toEqual(her);

  //  // const req=ht.expectOne(``)

  // })
  
});


