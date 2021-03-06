import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoUiClassDirective } from '../../evo-ui-kit.module';
import { EvoLoaderComponent } from './evo-loader.component';

describe('EvoLoaderComponent', () => {
  let component: EvoLoaderComponent;
  let fixture: ComponentFixture<EvoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoLoaderComponent, EvoUiClassDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
