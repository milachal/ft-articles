import React, { ReactElement, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/search-suggestion.module.scss";
import { SuggestionsProps, GetArticleResponse } from "../types";

const SearchSuggestion = ({
  suggestions,
  setShowSuggestions
}: SuggestionsProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      className={styles.suggestionsContainer}
      ref={wrapperRef}
    >
      {suggestions?.map((suggestion: GetArticleResponse) => {
        const id = suggestion.id.split("/thing/");
        return (
          <div
            key={id[1]}
            className={styles.suggestionContainer}
          >
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Link href={`/article/${id[1]}`}>
              <a>
                <div className={styles.title}>{suggestion.title}</div>
              </a>
            </Link>
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