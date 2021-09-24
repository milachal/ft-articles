import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import HomeArticle from "../../components/home-article";
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
    /* eslint-disable quotes */
    const meta = wrapper.find(`[data-testid="meta"]`);
    const title = wrapper.find(`[data-testid="title"]`);
    const standfirst = wrapper.find(`[data-testid="standfirst"]`);

    expect(meta.exists()).toBe(true);
    expect(meta.text()).toBe("meta");

    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("Some title");

    expect(standfirst.exists()).toBe(true);
    expect(standfirst.text()).toBe("standfirst");
  });
});
