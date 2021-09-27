import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "../../components/header";

jest.mock("../../styles/header.scss", () => <div />);
jest.mock("../../styles/searchBar.scss", () => <div />);
jest.mock("../../styles/search-suggestion.scss", () => <div />);

describe("Header", () => {
  it("should render correctly", () => {
    const wrapper: ShallowWrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
