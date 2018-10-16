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
});
