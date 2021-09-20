import React from "react";
import { mount } from "enzyme";
import TestComponent from "../components/testComponent";

describe("Test test component", () => {
  it("should mount component correctly", () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.find("div").text()).toBe("Test");
  });
});
