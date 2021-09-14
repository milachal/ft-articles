import React, { ReactElement } from "react";
import { SuggestionsProps, GetArticleResponse } from "../types";

const SearchSuggestion = ({ suggestions }: SuggestionsProps): ReactElement => {
  console.log(suggestions);
  return (
    <>
      {suggestions?.map((suggestion: GetArticleResponse) => {
        return (
          <div>{suggestion.title}</div>
        );
      })}
    </>
  );
};

export default SearchSuggestion;
