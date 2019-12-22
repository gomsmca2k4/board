import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateBoardNameComponent } from "./create-board-name.component";

describe("CreateBoardNameComponent", () => {
  let component: CreateBoardNameComponent;
  let fixture: ComponentFixture<CreateBoardNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoardNameComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
