import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SearchSuggestion from "../../components/searchbar/search-suggestion";
import { SuggestionsProps } from "../../types";

const initialProps: SuggestionsProps = {
  suggestions: [{
    meta: "meta",
    title: "title",
    standfirst: "standfirst",
    body: "body",
    image: "url",
    id: "/thing/id"
  }],
  setShowSuggestions: jest.fn(),
  setQuery: jest.fn()
};

jest.mock("../../styles/search-suggestion.scss", () => <div />);

describe("SearchSuggestion component", () => {
  const wrapper: ShallowWrapper = shallow(<SearchSuggestion {...initialProps} />);

  it("tests if components is rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test component content", () => {
    const title = wrapper.find("[data-testid=\"title\"]");
    const image = wrapper.find("[data-testid=\"image\"]");

    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("title");
    expect(image.exists()).toBe(true);
    expect(image.prop("src")).toEqual("url");
  });
});
