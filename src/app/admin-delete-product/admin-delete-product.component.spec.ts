import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteProductComponent } from './admin-delete-product.component';

describe('AdminDeleteProductComponent', () => {
  let component: AdminDeleteProductComponent;
  let fixture: ComponentFixture<AdminDeleteProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeleteProductComponent]
    });
    fixture = TestBed.createComponent(AdminDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
