import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInfoDisplayComponent } from './budget-info-display.component';

describe('BudgetInfoDisplayComponent', () => {
  let component: BudgetInfoDisplayComponent;
  let fixture: ComponentFixture<BudgetInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetInfoDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
