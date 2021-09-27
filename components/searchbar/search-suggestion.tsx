import React, { ReactElement, useEffect, useRef } from "react";
import Link from "next/link";
import { SuggestionsProps, GetArticleResponse } from "../../types";

const SearchSuggestion = ({
  suggestions,
  setShowSuggestions,
  setQuery
}: SuggestionsProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const classNamePrefix = "suggestions-container";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setShowSuggestions]);

  const onClickHandler = () => {
    setShowSuggestions(false);
    setQuery("");
  };

  return (
    <div
      className={classNamePrefix}
      ref={wrapperRef}
    >
      {suggestions?.map((suggestion: GetArticleResponse) => {
        const id = suggestion.id.split("/thing/");
        return (
          <div
            key={id[1]}
            className={`${classNamePrefix}__suggestion`}
          >
            <Link href={`/article/${id[1]}`}>
              <a>
                <div
                  className={`${classNamePrefix}__title`}
                  data-testid="title"
                  onClick={onClickHandler}
                >
                  {suggestion.title}
                </div>
              </a>
            </Link>
            <div className={`${classNamePrefix}__image-wrapper`}>
              <img
                className={`${classNamePrefix}__image`}
                data-testid="image"
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
