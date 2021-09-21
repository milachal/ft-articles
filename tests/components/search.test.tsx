import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Search from "../../components/searchbar/search";

jest.useFakeTimers();
jest.mock("../../components/searchBar/searchBar.module.scss", () => <div />);
jest.mock("../../components/searchBar/search-suggestion.module.scss", () => <div />);

describe("Search input", () => {
  let wrapper: ShallowWrapper;
  const setState = jest.fn();
  const initialState = "";
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(() => [initialState, setState]);

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("tests the query state value is correct", () => {
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "banks" } });
    expect(setState).toHaveBeenCalledWith("banks");
  });

  // it("tests if results props of suggestion component are correct", () => {
  //   const input = wrapper.find("input");

  //   input.simulate("change", { target: { value: "banks" } });
  //   expect(wrapper.find("SearchSuggestion").prop("suggestions")).toBe("banks");
  // });
});
