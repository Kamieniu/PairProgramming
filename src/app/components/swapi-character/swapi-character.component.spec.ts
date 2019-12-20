import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiCharacterComponent } from './swapi-character.component';

describe('SwapiCharacterComponent', () => {
  let component: SwapiCharacterComponent;
  let fixture: ComponentFixture<SwapiCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
