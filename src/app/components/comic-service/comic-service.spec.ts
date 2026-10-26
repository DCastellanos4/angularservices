import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicService } from './comic-service';

describe('ComicService', () => {
  let component: ComicService;
  let fixture: ComponentFixture<ComicService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicService],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
