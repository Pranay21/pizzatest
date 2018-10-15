import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import SortButton from "../../../component/SortButton";

describe("Given SortButton", () => {
  let component;
  component = shallow(<SortButton />);
  it("should exist as 'form'", () => {
    expect(component.is("form.sortbutton")).to.be.true();
  });
});
