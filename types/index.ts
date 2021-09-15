import { Dispatch, SetStateAction } from "react";

export interface HomeProps {
  articles: any;
}

export interface HomeArticleProps {
  meta: string,
  title: string
  standfirst: string,
  image: string,
}

export interface GetArticleResponse {
  meta: string,
  title: string
  standfirst: string,
  image: string,
  id: string,
}

export interface SuggestionsProps {
  suggestions: GetArticleResponse[],
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
}

export interface SuggestionResult {
  apiUrl: string,
  aspectSet: string,
  id: string,
  modelVersion: string
}

export interface ArticlePageProps {
  article: {
    meta: string,
    title: string,
    standfirst: string,
    body: string,
    image: string,
    id: string
  }
}
