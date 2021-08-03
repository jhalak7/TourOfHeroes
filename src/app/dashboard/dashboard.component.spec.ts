import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('getHeroes',()=>{
    spyOn(component,'getHeroes');
    //const res=component.getHeroes();
    expect(component.getHeroes).toBeTruthy();
    expect(component.getHeroes).toHaveBeenCalled();
    //expect(res).toEqual()
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
