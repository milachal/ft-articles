import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import HomeArticle from "../../components/home-article/home-article";
import { HomeArticleProps } from "../../types";

const initialProps: HomeArticleProps = {
  meta: "meta",
  title: "Some title",
  standfirst: "standfirst",
  image: "url"
};

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(
    <HomeArticle {...initialProps} />
  );
});

jest.mock("../../components/home-article/home-article.module.scss", () => <div />);

describe("Home article", () => {
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test component content", () => {
    expect(wrapper.find(`[data-testid="meta"]`).text()).toBe("meta");
    expect(wrapper.find(`[data-testid="title"]`).text()).toBe("Some title");
    expect(wrapper.find(`[data-testid="standfirst"]`).text()).toBe("standfirst");
  });
});
