import React from "react";
import { shallow } from "enzyme";
import HomeArticle from "../../components/home-article/home-article";
import { HomeArticleProps } from "../../types";

const initialProps: HomeArticleProps = {
  meta: "meta",
  title: "Some title",
  standfirst: "standfirst",
  image: "url"
};

jest.mock("../../components/home-article/home-article.module.scss", () => <div />);

describe("Home article", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <HomeArticle {...initialProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
