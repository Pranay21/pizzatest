import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaList from "../../../component/PizzaList";

describe("Given RepoList", () => {
  function renderPizzaList(props = {}) {
    return shallow(<PizzaList {...props} />);
  }
  it("should be a <div/> with classname", () => {
    const component = renderPizzaList();
    expect(component.is("div.pizzaList")).to.be.true();
  });
  describe("when list is empty", () => {
    it("should render no PizzaItems", () => {
      const component = renderPizzaList();
      expect(component.find("li").length).to.equal(0);
    });
  });
});
