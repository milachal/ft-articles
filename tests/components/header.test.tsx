import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "../../components/header";

jest.mock("../../components/header/header.module.scss", () => <div />);
jest.mock("../../components/searchBar/searchBar.module.scss", () => <div />);
jest.mock("../../components/searchBar/search-suggestion.module.scss", () => <div />);

describe("Header", () => {
  it("should render correctly", () => {
    const wrapper: ShallowWrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
