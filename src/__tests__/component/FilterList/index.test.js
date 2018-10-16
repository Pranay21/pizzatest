import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import FilterList from "../../../component/FilterList";
import sinon from "sinon";

describe("Given FilterList", () => {
  let component;
  let handleFilterSpy;
  beforeEach(() => {
    handleFilterSpy = sinon.spy();
    component = shallow(<FilterList handleFilter={handleFilterSpy} />);
  });

  it("should exist as 'form'", () => {
    expect(component.is("form")).to.be.true();
  });
  it("should contain an input", () => {
    expect(component.find("input")).to.have.length(1);
  });

  it("should have a default state of searchText as empty string", () => {
    expect(component.state().searchText).to.equal("");
  });
  describe("When the input text changes", () => {
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
