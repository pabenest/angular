import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodoComponent } from './detail-todo.component';

describe('DetailTodoComponent', () => {
  let component: DetailTodoComponent;
  let fixture: ComponentFixture<DetailTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTodoComponent]
    });
    fixture = TestBed.createComponent(DetailTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
