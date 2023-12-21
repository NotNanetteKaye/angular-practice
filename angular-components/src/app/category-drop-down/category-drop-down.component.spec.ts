import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDropDownComponent } from './category-drop-down.component';

describe('CategoryDropDownComponent', () => {
  let component: CategoryDropDownComponent;
  let fixture: ComponentFixture<CategoryDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
