import React, {
  ReactElement, useState, useMemo
} from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { GetArticleResponse } from "../../types";
import SearchSuggestion from "./search-suggestion";

const Search = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<GetArticleResponse[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        className="search"
        placeholder="search..."
        onChange={onChangeHandler}
        value={query}
      />
      {showSuggestions && results?.length > 0 ? (
        <SearchSuggestion
          suggestions={results}
          setShowSuggestions={setShowSuggestions}
          setQuery={setQuery}
        />
      ) : null}
    </div>
  );
};

export default Search;
