import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDropDownComponent } from './email-drop-down.component';

describe('EmailDropDownComponent', () => {
  let component: EmailDropDownComponent;
  let fixture: ComponentFixture<EmailDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
