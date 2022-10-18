import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocStackComponent } from './doc-stack.component';

describe('DocStackComponent', () => {
  let component: DocStackComponent;
  let fixture: ComponentFixture<DocStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
