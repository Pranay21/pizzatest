import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import FilterList from "../../../component/FilterList";

describe("Given FilterList", () => {
  let component;
  beforeEach(() => {
    component = shallow(<FilterList />);
  });

  it("should exist as 'form'", () => {
    expect(component.is("form")).to.be.true();
  });
  it("should contain an input", () => {
    expect(component.find("input")).to.have.length(1);
  });
  it("should contain a <button> and text <search>", () => {
    expect(component.find("button")).to.have.length(1);
    expect(component.find("button").text()).to.equal("Search");
  });
  it("should have a default state of searchText as empty string", () => {
    expect(component.state().searchText).to.equal("");
  });
  describe("when the input text changes", () => {
    let mockText;
    let input;
    beforeEach(() => {
      mockText = "hello";
      input = component.find("input");
      input.simulate("change", { target: { value: mockText } });
    });

    it("should update the component state", () => {
      expect(component.state().searchText).to.equal(mockText);
    });
  });
});
