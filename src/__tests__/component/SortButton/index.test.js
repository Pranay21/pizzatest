import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import SortButton from "../../../component/SortButton";
import sinon from "sinon";

describe("Given SortButton", () => {
  let component;
  let handleSortButtonSpy;
  beforeEach(() => {
    handleSortButtonSpy = sinon.spy();
    component = shallow(<SortButton handleSortButton={handleSortButtonSpy} />);
  });

  it("should exist as 'form'", () => {
    expect(component.is("form.sortbutton")).to.be.true();
  });
  it("should contain a <button> ", () => {
    expect(component.find("button.pizzaSort")).to.have.length(1);
  });
  describe("When the button is clicked", () => {
    beforeEach(() => {
      let buttonSort = component.find("button");
      buttonSort.simulate("click", { preventDefault: sinon.spy() });
    });

    it('should call "handleSortButton" prop', () => {
      sinon.assert.calledOnce(handleSortButtonSpy);
    });
  });
});
