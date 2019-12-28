import { TestBed } from "@angular/core/testing";

import { TrelloBoardService } from "./trello-board.service";

describe("TrelloBoardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TrelloBoardService = TestBed.get(TrelloBoardService);
    expect(service).toBeTruthy();
  });
});
