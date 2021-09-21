import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SearchSuggestion from "../../components/searchbar/search-suggestion";
import { SuggestionsProps } from "../../types";

const initialProps: SuggestionsProps = {
  suggestions: [{
    meta: "meta",
    title: "title",
    standfirst: "standfirst",
    image: "url",
    id: "/thing/id"
  }],
  setShowSuggestions: jest.fn()
};

jest.mock("../../components/searchBar/search-suggestion.module.scss", () => <div />);

describe("SearchSuggestion component", () => {
  const wrapper: ShallowWrapper = shallow(<SearchSuggestion {...initialProps} />);

  it("tests if components is rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});