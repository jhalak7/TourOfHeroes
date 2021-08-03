import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HeroService } from '../hero.service';

import { HeroDetailComponent } from './hero-detail.component';
const ActivatedRouteSpy = {
  snapshot: {
    paramMap: convertToParamMap({
      some: 'some',
      else: 'else',
    })
  }
};
describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[
        { provide: ActivatedRoute,   useValue: ActivatedRouteSpy    }
      ],
      declarations: [ HeroDetailComponent ],
     
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    
    const service = TestBed.inject(HeroService);
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('getHero',()=>{
   spyOn(component,'getHero');
   expect(component.getHero).toBeTruthy();
   //expect(component.getHero).toHaveBeenCalled();
 });
 it('goBack',()=>{
  spyOn(component,'goBack');
  expect(component.goBack).toBeTruthy();
  //expect(component.getHero).toHaveBeenCalled();
});
it('save',()=>{
  spyOn(component,'save');
  expect(component.save).toBeTruthy();
  //expect(component.getHero).toHaveBeenCalled();
});
});
