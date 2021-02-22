import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTileComponent } from './about-tile.component';

describe('AboutTileComponent', () => {
  let component: AboutTileComponent;
  let fixture: ComponentFixture<AboutTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
