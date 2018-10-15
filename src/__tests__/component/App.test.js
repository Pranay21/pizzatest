import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "../../../src/component/App";
import * as listOfPizza from "../../pizza";
import sinon from "sinon";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should be a <main>", () => {
    expect(component.type()).to.equal("main");
  });

  it("should have a default PizzaList state of empty string", () => {
    expect(component.state().pizzaList).to.equal([]);
  });
  it("should be a <PizzaList>", () => {
    expect(component.find("PizzaList").exists()).to.be.true();
  });
  it("should be a <SortButton>", () => {
    expect(component.find("SortButton").exists()).to.be.true();
  });

  describe("when the componentDidMount() is triggered", () => {
    let fetchPizzalist;
    beforeEach(() => {
      fetchPizzalist = sinon.stub(listOfPizza, "fetchPizza");
      fetchPizzalist.resolves([{}]);
    });
    it("it should update the state", () => {
      component.instance().componentDidMount();
      expect(component.state().pizzaList).to.equal([]);
    });
  });
});
