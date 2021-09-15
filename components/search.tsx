import React, { ReactElement, useState } from "react";
import axios from "axios";
import styles from "../styles/Search.module.scss";
import { GetArticleResponse } from "../types";
import SearchSuggestion from "./search-suggestion";

const Search = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<GetArticleResponse[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const res = await axios.post(
      "/api/search", {
        queryString: `${e.target.value}`,
        queryContext: {
          curations: ["ARTICLES"]
        }
      }
    );
    setResults(res.data.articles);
    setShowSuggestions(true);
  };

  return (
    <div>
      <input
        className={styles.search}
        placeholder="search..."
        onChange={onChangeHandler}
        value={query}
      />
      {showSuggestions && results?.length > 0 ? (
        <SearchSuggestion
          suggestions={results}
          setShowSuggestions={setShowSuggestions}
        />
      ) : null}
    </div>
  );
};

export default Search;
