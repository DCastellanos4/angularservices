import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillafuncionSimpleMultiple } from './plantillafuncion-simple-multiple';

describe('PlantillafuncionSimpleMultiple', () => {
  let component: PlantillafuncionSimpleMultiple;
  let fixture: ComponentFixture<PlantillafuncionSimpleMultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionSimpleMultiple],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionSimpleMultiple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
