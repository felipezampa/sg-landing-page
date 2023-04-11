import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateLPageComponent } from './template-lpage.component';

describe('TemplateLPageComponent', () => {
  let component: TemplateLPageComponent;
  let fixture: ComponentFixture<TemplateLPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateLPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
