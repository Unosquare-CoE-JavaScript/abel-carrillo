import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  // Code required for each test
  beforeEach(() => {
    console.log("Calling before each test");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    //calculator = new CalculatorService(loggerSpy);
    calculator = TestBed.inject(CalculatorService);
  });

  // TODO: Test 1
  it("should add two numbers", () => {
    console.log("TEST #1");

    const result = calculator.add(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    // pending(); // indication to Jasmine that the test is not yet ready.
  });

  // TODO: Test 2
  it("should subtract two numbers", () => {
    console.log("TEST #2");

    const result = calculator.subtract(2, 1);

    expect(result).toBe(1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
