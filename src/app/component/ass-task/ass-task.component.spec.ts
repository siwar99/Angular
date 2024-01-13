import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssTaskComponent } from './ass-task.component';

describe('AssTaskComponent', () => {
  let component: AssTaskComponent;
  let fixture: ComponentFixture<AssTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
