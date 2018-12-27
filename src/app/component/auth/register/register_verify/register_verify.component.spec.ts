import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVerifyComponent } from './register_verify.component';

describe('RegisterVerifyComponent', () => {
  let component: RegisterVerifyComponent;
  let fixture: ComponentFixture<RegisterVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
