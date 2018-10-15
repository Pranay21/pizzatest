import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "../../src/component/App";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should be a <main>", () => {
    expect(component.type()).to.equal("main");
  });
});
