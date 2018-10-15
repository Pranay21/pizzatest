import { expect } from "code";
import { fetchPizza } from "../../src/pizza";
import sinon from "sinon";

describe("Given the Pizza Api", () => {
  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });
  afterEach(() => {
    sinon.restore();
  });
  describe("when the fetchpizza() is called", () => {
    describe("Then the call is successful", () => {
      const mockValue = [{}];
      const json = sinon.stub().returns(mockValue);
      beforeEach(() => {
        fetchStub.resolves({ json });
      });
      it("should return the list of Pizza", () => {
        fetchPizza().then(pizzaList => {
          expect(pizzaList).to.equal(mockValue);
        });
      });
    });

    describe("when the call is unsuccessful", () => {
      beforeEach(() => {
        fetchStub.rejects({ message: "Sorry can't fetch the data" });
      });
      it("should throw error", () => {
        fetchPizza().then(() => {
          expect(true).to.be.false();
        });
      });
    });
  });
});
