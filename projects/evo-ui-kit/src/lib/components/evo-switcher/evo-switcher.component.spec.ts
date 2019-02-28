import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSwitcherComponent } from './evo-switcher.component';

describe('EvoSwitcherComponent', () => {
  let component: EvoSwitcherComponent;
  let fixture: ComponentFixture<EvoSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoSwitcherComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
