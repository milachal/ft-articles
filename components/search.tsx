import React, { ReactElement, useState } from "react";
import axios from "axios";
import styles from "../styles/Search.module.scss";

const Search = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState(null);

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
    setResults(res?.data?.data?.results[0]);
  };

  return (
    <>
      <input
        className={styles.search}
        placeholder="search..."
        onChange={onChangeHandler}
        value={query}
      />
    </>
  );
};

export default Search;
