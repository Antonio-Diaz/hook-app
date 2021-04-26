import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Tests on <HookApp />", () => {
  test("must show successfully", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
