import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/header/header";

jest.mock("../../components/header/header.module.scss", () => <div />);
jest.mock("../../components/searchBar/searchBar.module.scss", () => <div />);
jest.mock("../../components/searchBar/search-suggestion.module.scss", () => <div />);

describe("Header", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
