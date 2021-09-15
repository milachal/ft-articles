import React, { ReactElement } from "react";
import styles from "../styles/search-suggestion.module.scss";
import { SuggestionsProps, GetArticleResponse } from "../types";

const SearchSuggestion = ({ suggestions }: SuggestionsProps): ReactElement => {
  console.log(suggestions);
  return (
    <div className={styles.suggestionsContainer}>
      {suggestions?.map((suggestion: GetArticleResponse) => {
        return (
          <div
            key={suggestion.id}
            className={styles.suggestionContainer}
          >
            <div className={styles.title}>{suggestion.title}</div>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={suggestion.image}
                alt="article"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSuggestion;
