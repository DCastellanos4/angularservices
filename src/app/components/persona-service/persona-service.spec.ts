import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaService } from './persona-service';

describe('PersonaService', () => {
  let component: PersonaService;
  let fixture: ComponentFixture<PersonaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaService],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
