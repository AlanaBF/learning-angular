import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBasicsComponent } from './template-basics.component';

describe('TemplateBasicsComponent', () => {
  let component: TemplateBasicsComponent;
  let fixture: ComponentFixture<TemplateBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
