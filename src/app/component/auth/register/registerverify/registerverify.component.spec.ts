import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterverifyComponent } from './registerverify.component';

describe('RegisterverifyComponent', () => {
  let component: RegisterverifyComponent;
  let fixture: ComponentFixture<RegisterverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
