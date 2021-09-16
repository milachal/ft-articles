import React, {
  ReactElement, useState, useMemo
} from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import styles from "../styles/searchBar.module.scss";
import { GetArticleResponse } from "../types";
import SearchSuggestion from "./search-suggestion";

const Search = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<GetArticleResponse[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(query);
  const callApi = async (value: string) => {
    const res = await axios.post(
      "/api/search", {
        queryString: `${value}`,
        queryContext: {
          curations: ["ARTICLES"]
        }
      }
    );
    if (value !== "") {
      setResults(res.data.articles);
      setShowSuggestions(true);
    }
  };

  const delayedApiCall = useMemo(() => debounce(callApi, 300), []);

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "event");
    setQuery(e.target.value);
    if (e.target.value !== "") {
      delayedApiCall(e.target.value);
    } else {
      setShowSuggestions(false);
    }
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
