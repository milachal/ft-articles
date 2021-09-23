import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import axios from "axios";
import Search from "../../components/searchbar/search";

jest.useFakeTimers();
jest.mock("axios");
jest.mock("../../components/searchBar/searchBar.module.scss", () => <div />);
jest.mock("../../components/searchBar/search-suggestion.module.scss", () => <div />);

const articles = [
  {
    meta: "European Union",
    title: "Gulf states caught between US and China",
    standfirst: "Countries like Saudi Arabia and UAE struggle to balance relations between Washington and Beijing",
    image: "https://d1e00ek4ebabms.cloudfront.net/production/a3022009-3565-4933-9f7e-61f4625a3cdf.jpg",
    id: "http://www.ft.com/thing/bde35a2f-ae3f-4fc5-920f-a6bca45d9eb3"
  }
];

describe("Search input", () => {
  let wrapper: ShallowWrapper;
  const query = "banks";
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

    input.simulate("change", { target: { value: query } });
    expect(setState).toHaveBeenCalledWith(query);
  });

  it("should make api call with correct query", async () => {
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: query } });

    await act(async () => {
      axios.post.mockImplementation(() => Promise.resolve({
        data: {
          articles
        }
      }));
      jest.advanceTimersByTime(1000);
      expect(axios.post).toHaveBeenCalledWith("/api/search", {
        queryString: `${query}`,
        queryContext: {
          curations: ["ARTICLES"]
        }
      });
    });
  });
});
